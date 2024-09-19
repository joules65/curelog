"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { CreateAppointmentSchema, getAppointmentSchema, UserFormValidation } from "@/lib/validation"
import { useRouter } from "next/navigation"
import {createUser} from "@/lib/actions/patient.actions"
import { FormFieldType } from "./PatientForm"
import { Doctors } from "@/constants"
import { SelectItem } from "../select"
import  Image  from "next/image"
import { createAppointment } from "@/lib/actions/appointment.actions"
const AppointmentForm = ({
    userId, patientId, type
}:{
    userId: string;
    patientId: string;
    type: "create" | "cancel" | "schedule";
}) => {
const router = useRouter();  
const [isLoading, setIsLoading] = useState(false);

const AppointmentFormValidation = getAppointmentSchema(type);

  const form = useForm<z.infer<typeof AppointmentFormValidation>>({
    resolver: zodResolver(AppointmentFormValidation),
    defaultValues: {
      primaryPhysician: "",
      schedule: new Date(),
      reason: "",
      note: "",
      cancellationReason: "",
    },
  })
 
  
  async function onSubmit(values: z.infer<typeof AppointmentFormValidation>) {
    setIsLoading(true);

    let status;
    switch (type) {
        case 'schedule':
            status = 'scheduled';
            break;
        case 'cancel':
            status = 'cancelled';
            break;    
        default:
            status = 'pending';
            break;
    }

    try {
      if(type === 'create' && patientId) {
        console.log('Im Here');
        const appointmentData = {
            userId,
            patient: patientId,
            primaryPhysician: values.primaryPhysician,
            schedule: new Date(values.schedule),
            reason: values.reason!,
            note: values.note,
            status: status as Status,
        }
        const appointment = await createAppointment(appointmentData);
        if(appointment) {
            form.reset();
            router.push(`/patients/${userId}/new-appointment/success?appointmentId=${appointment.$id}`);
        }
    }  
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex-1">
        <section className="mb-12 space-y-4">
            <h1 className="header">New Appointment </h1>
            <p className="text-dark-700">Request a new Appointment quickly.</p>
        </section>

          {type !== "cancel" && (
            <>
               <CustomFormField fieldType={FormFieldType.SELECT} control={form.control} name="primaryPhysician" label="Doctor" placeholder="Select a Doctor">
            {Doctors.map((doctor, i) => (
              <SelectItem key={doctor.name + i} value={doctor.name}>
                <div className="flex cursor-pointer items-center gap-2">
                  <Image src={doctor.image} width={32} height={32} alt="doctor" className="rounded-full border border-dark-500" />
                  <p>{doctor.name}</p>
                </div>
              </SelectItem>
            ))}
          </CustomFormField>

          <CustomFormField 
            fieldType={FormFieldType.DATE_PICKER}
            control={form.control}
            name="schedule"
            label="Expected Appointment Date"
            showTimeSelect
            dateFormat="MM/dd/yyy - h:mm aa"
          />
          <div className="flex flex-col gap-6">
          <CustomFormField 
            fieldType={FormFieldType.TEXTAREA}
            control={form.control}
            name="reason"
            label="Appointment Reason"
            placeholder="Enter Reason For Appointment"
          />

        <CustomFormField 
            fieldType={FormFieldType.TEXTAREA}
            control={form.control}
            name="note"
            label="Notes"
            placeholder="Leave a Note"
          />
          </div>
        </>
          )}

          {type === "cancel"}

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  )
}

export default AppointmentForm