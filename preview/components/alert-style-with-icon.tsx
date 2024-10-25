import { Alert } from "@/packages/ui";
import { CheckCircle } from "lucide-react";

export default function AlertStyleDefault() {
  return (
    <Alert className="flex">
      <CheckCircle className="h-5 w-5 mr-4 mt-2" />
      <div>
        <Alert.Title>Heads up!</Alert.Title>
        <Alert.Description>
          This is where you can write description that no one reads...
        </Alert.Description>
      </div>
    </Alert>
  );
}
