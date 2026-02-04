import { Card, Input, Button, message } from "antd";
import { useForm, Controller } from "react-hook-form";
import { useCreateUserInfo } from "./hooks/useApi";
import { MESSAGES } from "./constants/messages";

import type { UserInfo } from "./lib/api";

const Contact: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const createUserInfoMutation = useCreateUserInfo();

  const {
    control,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm<UserInfo>({
    defaultValues: {
      name: "",
      age: 0,
      address: "",
    },
  });

  const onSubmit = async (data: UserInfo): Promise<void> => {
    try {
      await createUserInfoMutation.mutateAsync({
        name: data.name,
        age: data.age,
        address: data.address,
      });
      messageApi.success(MESSAGES.CONTACT.SUCCESS);
      reset();
    } catch (error) {
      messageApi.error(
        error instanceof Error ? error.message : MESSAGES.CONTACT.ERROR,
      );
    }
  };

  return (
    <div className="flex mt-10 justify-center h-screen ">
      <Card className="w-full  max-w-md">
        {contextHolder}
        <h1 className="text-xl font-bold mb-6 text-center ">注册用户</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">用户名</label>
            <Controller
              name="name"
              control={control}
              rules={{
                required: "请输入用户名",
                minLength: {
                  value: 3,
                  message: "用户名至少3个字符",
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="请输入用户名"
                  status={errors.name ? "error" : ""}
                />
              )}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">年龄</label>
            <Controller
              name="age"
              control={control}
              rules={{
                required: "请输入年龄",
                min: {
                  value: 0,
                  message: "年龄必须大于0",
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  type="number"
                  placeholder="请输入年龄"
                  status={errors.age ? "error" : ""}
                  onChange={(e) => {
                    // 转换为数字类型
                    const value =
                      e.target.value === "" ? "" : Number(e.target.value);
                    field.onChange(value);
                  }}
                />
              )}
            />
            {errors.age && (
              <p className="text-red-500 text-xs mt-1">{errors.age.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">地址</label>
            <Controller
              name="address"
              control={control}
              rules={{
                required: "请输入地址",
                message: "请输入有效的地址",
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  placeholder="请输入您的地址"
                  status={errors.address ? "error" : ""}
                />
              )}
            />
            {errors.address && (
              <p className="text-red-500 text-xs mt-1">
                {errors.address.message}
              </p>
            )}
          </div>

          <Button
            type="primary"
            htmlType="submit"
            block
            loading={createUserInfoMutation.isPending}
            className="mt-6"
          >
            {createUserInfoMutation.isPending ? "创建中..." : "创建"}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Contact;
