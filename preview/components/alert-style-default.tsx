import { Alert } from "@/packages/ui";

export default function AlertStyleDefault() {
  return (
    <Alert>
      <Alert.Title>Heads up!</Alert.Title>
      <Alert.Description>
        You can add components to your app using the cli.
      </Alert.Description>
    </Alert>
  );
}
