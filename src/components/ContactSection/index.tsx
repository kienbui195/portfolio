import * as React from "react";
import { cn, getImageUrl } from "../../lib/utils";
import { useSelector } from "react-redux";
import { RootState } from "../../lib/store";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Textarea } from "../ui/textarea";
import axios from "axios";

export interface IContactState {
  profile?: string;
  thumbnail?: string;
}

const Contact = () => {
  const cacheData = useSelector((state: RootState) => state.cache.data)[
    "homepage"
  ];
  const [loading, setLoading] = React.useState(false);
  const formSchema = React.useMemo(() => {
    return z.object({
      name: z
        .string()
        .trim()
        .min(3, { message: "Tên hợp hệ cần ít nhất 3 kí tự!" }),
      email: z.string().email({
        message: "Email không hợp lệ!",
      }),
      title: z.string(),
      content: z.string().trim().min(10, {
        message: "Cho chúng tôi biết bạn cần hỗ trợ gì?",
      }),
    });
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      title: "",
      content: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    await axios
      .post(`${process.env.REACT_APP_API_URL}/user-contacts`, {
        data: {
          name: values.name,
          email: values.email,
          title: values.title,
          content: values.content,
        },
      })
      .then((res) => {
        alert(
          "Bạn đã gửi biểu mẫu thành công! Chúng tôi sẽ xem xét và phản hồi bạn sớm nhất có thể!"
        );
      })
      .catch((err) => {
        alert("Đã xảy ra lỗi không mong muốn! Vui lòng thử lại sau!");
      })
      .finally(() => setLoading(false));
  }

  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex flex-col items-center"
    >
      <div className="container px-4 md:px-6 ">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">
          Liên hệ
        </h2>
        <div
          className={cn([
            "grid md:grid-cols-2 grid-cols-1 gap-4 py-6",
            !cacheData ||
              (cacheData && !cacheData.contact && "md:!grid-cols-1"),
          ])}
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 bg-white p-4 rounded-lg shadow-lg flex-1"
            >
              <h4 className="text-xl font-bold mb-10">Liên hệ với chúng tôi</h4>
              <div className={cn(["grid sm:grid-cols-2 gap-4 flex-1"])}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Họ Tên/Biệt Danh
                        <span className="text-red-500 ml-1">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} required className="flex-1" />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Email<span className="text-red-500 ml-1">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type={"email"}
                          required
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tiêu đề</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nội dung</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <div className="w-full flex justify-center">
                <Button
                  type="submit"
                  className="bg-green-500 text-white font-bold hover:opacity-70"
                  disabled={loading}
                >
                  Submit
                </Button>
              </div>
            </form>
          </Form>
          {cacheData && cacheData.contact && cacheData.contact.profile && (
            <div
              className="bg-white p-4 rounded-lg shadow-lg flex-1"
              dangerouslySetInnerHTML={{ __html: cacheData.contact.profile }}
            ></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
