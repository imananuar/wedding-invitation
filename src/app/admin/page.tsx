import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Admin() {
  return (
    <>
      <div className="p-10">
        <nav>
          <Link href="/">
            <Button>Back to Main</Button>
          </Link>
        </nav>
        <h1 className="text-center">
          Welcome Afif al afifi la pospos na squera!
        </h1>
      </div>
    </>
  );
}
