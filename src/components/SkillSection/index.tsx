import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { useSelector } from "react-redux";
import { RootState } from "../../lib/store";

export interface ISkillState {
  id: number;
  name: string;
  type: "Frontend" | "Backend" | "Other";
}

const Skill = () => {
  const cacheData = useSelector((state: RootState) => state.cache.data)["homepage"];

  const data = React.useMemo(() => {
    return cacheData ? (cacheData.skill as ISkillState[]) : [];
  }, [cacheData]);

  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex flex-col items-center">
      <div className="container px-4 md:px-6 md:pb-10 pb-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Kỹ năng</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-green-100">
            <CardHeader>
              <CardTitle>Frontend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {data &&
                  data.length > 0 &&
                  Array.from(data)
                    .filter(item => item.type === "Frontend")
                    .map((item, idx) => <Badge key={idx}>{item.name}</Badge>)}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-blue-100">
            <CardHeader>
              <CardTitle>Backend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {data &&
                  data.length > 0 &&
                  Array.from(data)
                    .filter(item => item.type === "Backend")
                    .map((item, idx) => <Badge key={idx}>{item.name}</Badge>)}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardHeader>
              <CardTitle>Công cụ & Khác</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {data &&
                  data.length > 0 &&
                  Array.from(data)
                    .filter(item => item.type === "Other")
                    .map((item, idx) => <Badge key={idx}>{item.name}</Badge>)}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skill;
