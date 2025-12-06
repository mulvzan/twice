import { Card, Input, Button, message } from "antd";
import { useForm, Controller } from "react-hook-form";
import { useSendContactMessage } from "./hooks/useApi";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const sendMessageMutation = useSendContactMessage();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormData): Promise<void> => {
    try {
      await sendMessageMutation.mutateAsync(data);
      messageApi.success("消息发送成功！");
      reset();
    } catch (error) {
      messageApi.error(error instanceof Error ? error.message : "发送失败，请重试");
    }
  };

  return (
    <div className="flex mt-10 justify-center h-screen ">
      <Card className="w-full  max-w-md">
        {contextHolder}
        <h1 className="text-xl font-bold mb-6 text-center ">联系我们</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">姓名</label>
            <Controller
              name="name"
              control={control}
              rules={{
                required: "请输入姓名",
                minLength: {
                  value: 2,
                  message: "姓名至少2个字符"
                }
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="请输入您的姓名"
                  status={errors.name ? "error" : ""}
                />
              )}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">邮箱</label>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "请输入邮箱",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "请输入有效的邮箱地址"
                }
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  type="email"
                  placeholder="请输入您的邮箱"
                  status={errors.email ? "error" : ""}
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">消息</label>
            <Controller
              name="message"
              control={control}
              rules={{
                required: "请输入消息内容",
                minLength: {
                  value: 10,
                  message: "消息内容至少10个字符"
                }
              }}
              render={({ field }) => (
                <Input.TextArea
                  {...field}
                  placeholder="请输入您的消息"
                  rows={4}
                  status={errors.message ? "error" : ""}
                />
              )}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
            )}
          </div>

          <Button
            type="primary"
            htmlType="submit"
            block
            loading={sendMessageMutation.isPending}
            className="mt-6"
          >
            {sendMessageMutation.isPending ? "发送中..." : "发送消息"}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Contact;