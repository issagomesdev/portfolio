import { toast } from "sonner";

export const showToast = {
  success: (title:string, message: string) => toast.message(title, {
    description: message,
  }),
  error: (message: string) => toast.error(message),
  info: (message: string) => toast.info(message),
  warning: (message: string) => toast.warning(message),
  promise: (
    promise: Promise<any>,
    messages: { 
      loading: string; 
      success: { message: string; description: string }; 
      error: { message: string; description: string }; 
    }
  ) =>
    toast.promise(promise, {
      loading: messages.loading,
      success: (
        <>
          <strong>{messages.success.message}</strong>
          <p style={{ margin: 0 }}>{messages.success.description}</p>
        </>
      ),
      error: (
        <>
          <strong>{messages.error.message}</strong>
          <p style={{ margin: 0 }}>{messages.error.description}</p>
        </>
      ),
    }),
};
