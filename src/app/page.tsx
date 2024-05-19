import { PhoneNumberForm } from "./phoneNumberForm";
import prisma from "../lib/prisma";
import { redirect } from "next/navigation";

export default function Home() {
  async function ValidatePhoneNumber(formData: FormData) {
    "use server";
    const rawFormData = {
      phoneNumber: formData.get("phoneNumber"),
    };

    if (rawFormData.phoneNumber != "") {
      let phoneNumber: any = rawFormData.phoneNumber?.toString();
      if (phoneNumber[0] !== "6") {
        phoneNumber = "6" + phoneNumber;
      }
      const guest = await prisma.user.findUnique({
        where: {
          phoneNumber: parseInt(phoneNumber),
        },
      });

      if (guest != null) {
        return redirect("/admin");
      } else {
        console.log(phoneNumber);
        console.log("Takdokkkk");
      }
    }

    return {
      id: "yup",
    };
  }
  return (
    <main className="flex min-h-screen flex-col p-10 border border-red-400 items-center justify-center bg-gray-400">
      <PhoneNumberForm action={ValidatePhoneNumber} />
    </main>
  );
}
