import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function Hello() {
  return (
    <>
      <div className="w-[500px] sm:w-[320px] m-auto flex flex-col items-center text-center mt-[10rem]">
        <img src="/enterlance.svg" className="w-20 mb-4 drop-shadow-lg" />
        <div className="font-unb font-bold text-3xl text-neutral-900">{`${process.env.NEXT_PUBLIC_SITENAME}`}</div>
        <div className="mt-4 font-medium text-neutral-700 m-auto">
          Данный сайт используется как шаблон для всех подпроектов компании
          Enterlance, и находится в окрытом доступе для общего использования.
        </div>
        <div className="w-full flex flex-row flex-wrap gap-2 mt-6 items-center">
          <Link href="https://enterlance.com" target="_blank" className="flex-grow">
            <Button variant={`default`} size={'full'}>
              Открыть сайт
              <ExternalLink className="ml-2" size={20} />
            </Button>
          </Link>
          <Link href="https://github.com/enterlance-labs" target="_blank" className="flex-grow">
            <Button variant={`outline`} size={'full'}>
              Github Repo
              <Github className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
