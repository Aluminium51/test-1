import React from "react";
import { services } from "../data/exampleData";

const CardAbout = ({item}) => {
  return (
    <div className="xs:w-[250px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img 
        style = {{width: '80%'}}
        className="rounded-t-lg" 
        src={item.image} 
        alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"   // <-- Updated this line
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>

        </a>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="about-head">
      <div className="sectionSubText">Introduction</div>
      <h2 className="sectionHeadText">Overview</h2>

      <div className="about-text">
        องค์ประกอบของระบบคอมพิวเตอร์และปฏิสัมพันธ์ การทําโปรแกรม ประเภทข้อมูล
        ตัวปฏิบัติการ นิพจน์ข้อความสั่ง โครงสร้างควบคุม การรวมกลุ่มข้อมูล
        เครื่องมือต่าง ๆ ในการทําโปรแกรม แบบอย่างและสัญนิยมต่าง ๆ
        ในการทําโปรแกรม การตรวจแก้จุดบกพร่อง
        การออกแบบและพัฒนาโปรแกรมโดยใช้ภาษาระดับสูงและคลังคําสั่งเชิงจํานวนเพื่อประยุกต์ใช้กับ
        ปัญหาทางด้านวิศวกรรม
      </div>

      <div className="mt-10 flex flex-wrap gap-10" >
        {services.map((item, index) => (
          <CardAbout key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default About;
