import React from "react";
import { useState } from "react";
import {
  HistoryOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
  PieChartOutlined,
  InboxOutlined,
} from "@ant-design/icons";

import {
  Steps,
  Card,
  Divider,
  Input,
  Form,
  Col,
  Row,
  Select,
  Button,
  Upload,
} from "antd";

function App() {
  const [form] = Form.useForm();

  const [page, setPage] = useState(1);

  const onFinish = (values) => {
    console.log(page, values);
  };

  const nextPage = (values) => {
    setPage(page + 1);
  };

  const backPage = (values) => {
    setPage(page - 1);
  };

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const options = [
    { value: "06.00", label: "06.00" },
    { value: "07.00", label: "07.00" },
    { value: "08.00", label: "08.00" },
    { value: "09.00", label: "09.00" },
    { value: "10.00", label: "10.00" },
    { value: "11.00", label: "11.00" },
    { value: "12.00", label: "12.00" },
    { value: "13.00", label: "13.00" },
    { value: "14.00", label: "14.00" },
    { value: "15.00", label: "15.00" },
    { value: "16.00", label: "16.00" },
    { value: "17.00", label: "17.00" },
    { value: "18.00", label: "18.00" },
    { value: "19.00", label: "19.00" },
    { value: "20.00", label: "20.00" },
    { value: "21.00", label: "21.00" },
    { value: "22.00", label: "22.00" },
    { value: "23.00", label: "23.00" },
    { value: "00.00", label: "00.00" },
  ];

  return (
    <div className="flex items-center justify-center  mb:pt-16 flex-col ">
      {/* <Steps
        className="px-64 hidden lg:flex"
        items={[
          {
            title: "ข้อมูลทั่วไป",
            status: "process",
            icon: <UserOutlined />,
          },
          {
            title: "สถานที่ทำงาน",
            status: "wait",
            icon: <SolutionOutlined />,
          },
          {
            title: "ประสบการณ์ทำงาน",
            status: "wait",
            icon: <HistoryOutlined />,
          },
          {
            title: "ตารางเวลางาน",
            status: "wait",
            icon: <PieChartOutlined />,
          },
          {
            title: "ยืนยันตัวตน",
            status: "wait",
            icon: <SmileOutlined />,
          },
        ]}
      /> */}
      <Card className="m-4">
        <div className="flex items-center flex-col">
          <svg
            className="w-56 mb-5 "
            viewBox="0 0 327 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="327" height="130" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1">
                <use
                  href="#image0_21_1205"
                  transform="scale(0.0030581 0.00769231)"
                />
              </pattern>
              <image
                id="image0_21_1205"
                width="327"
                height="130"
                href="data:image/png;base64,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"
              />
            </defs>
          </svg>
          <div className="text-[#0E286B] text-xl font-bold text-center ">
            ลงทะเบียนผู้ให้บริการ TeleHealth Thailand
          </div>
          <div className=" text-xs text-[#57647E] text-center">
            สำหรับบุคลากรทางการแพทย์เท่านั้น
          </div>
        </div>
        <div className="mt-20">
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <div class={page !== 1 ? "hidden" : "null"}>
              <div className=" text-left text-[#0e286b] font-bold">
                ข้อมูลทั่วไป
              </div>
              <Divider />
              <Row gutter={[8, 8]}>
                <Col span={12}>
                  <Form.Item
                    label="Email"
                    name="email"
                    className=" w-full"
                    // rules={[
                    //   {
                    //     required: true,
                    //     message: "Please input your username!",
                    //     type: "email",
                    //   },
                    // ]}
                  >
                    <Input placeholder="input email" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="เลขบัตรประชาชน" className=" w-full">
                    <Input placeholder="input ID" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[8, 8]}>
                <Col span={12}>
                  <Form.Item label="คำนำหน้า" className=" w-full">
                    <Select
                      options={[
                        { value: "MR", label: "นาย" },
                        { value: "MS", label: "นาง" },
                        { value: "MRS", label: "นางสาว" },
                      ]}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[8, 8]}>
                <Col span={12}>
                  <Form.Item label="ชื่อ" className=" w-full">
                    <Input placeholder="input email" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="นามสกุล" className=" w-full">
                    <Input placeholder="input ID" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[8, 8]}>
                <Col span={12}>
                  <Form.Item label="อาชีพ" className=" w-full">
                    <Input placeholder="input email" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="หมายเลขโทรศัพท์" className=" w-full">
                    <Input placeholder="input ID" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[8, 8]}>
                <Col span={12}>
                  <Form.Item
                    label="เลขที่ใบอนุญาตประกอบวิชาชีพ"
                    className=" w-full">
                    <Input placeholder="input email" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="สถานะใบอนุญาต" className=" w-full">
                    <Input placeholder="input ID" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[8, 8]}>
                <Col span={12}>
                  <Form.Item label="ID Line ของท่าน" className=" w-full">
                    <Input placeholder="input email" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[8, 8]}>
                <Col span={24}>
                  <Form.Item
                    label="ที่อยู่ที่สามารถติดต่อได้"
                    className=" w-full">
                    <Input.TextArea rows={6} />
                  </Form.Item>
                </Col>
              </Row>
            </div>
            <div class={page !== 2 ? "hidden" : "null"}>
              <div className=" text-left text-[#0e286b] font-bold">
                ข้อมูลสถานที่ทำงานหลัก
              </div>
              <Divider />
              <Row gutter={[8, 8]}>
                <Col span={12}>
                  <Form.Item label="ประเภทสถานที่ทำงาน" className=" w-full">
                    <Select
                      options={[
                        {
                          value: "โรงพยาบาลมหาวิทยาลัย",
                          label: "โรงพยาบาลมหาวิทยาลัย",
                        },
                        {
                          value: "โรงพยาบาลส่วนกลาง",
                          label: "โรงพยาบาลส่วนกลาง",
                        },
                        { value: "โรงพยาบาลศูนย์", label: "โรงพยาบาลศูนย์" },
                        { value: "โรงพยาบาลทั่วไป", label: "โรงพยาบาลทั่วไป" },
                        { value: "โรงพยาบาลชุมชน", label: "โรงพยาบาลชุมชน" },
                        {
                          value: "โรงพยาบาลส่งเสริมสุขภาพตำบล",
                          label: "โรงพยาบาลส่งเสริมสุขภาพตำบล",
                        },
                        {
                          value: "โรงพยาบาลเอกชน",
                          label: "โรงพยาบาลเอกชน",
                        },
                        {
                          value: "มหาวิทยาลัย",
                          label: "มหาวิทยาลัย",
                        },
                        {
                          value: "ร้านยาเดี่ยว",
                          label: "ร้านยาเดี่ยว",
                        },
                        {
                          value: "ร้านยาเครือข่าย",
                          label: "ร้านยาเครือข่าย",
                        },
                        {
                          value: "คลินิกการพยาบาลและการผดุงครรภ์",
                          label: "คลินิกการพยาบาลและการผดุงครรภ์",
                        },
                        {
                          value: "คลินิกกายภาพบำบัด",
                          label: "คลินิกกายภาพบำบัด",
                        },
                        {
                          value: "คลินิกเทคนิคการแพทย์",
                          label: "คลินิกเทคนิคการแพทย์",
                        },
                        {
                          value: "คลินิกแพทย์แผนไทยประยุกต์",
                          label: "คลินิกแพทย์แผนไทยประยุกต์",
                        },
                        {
                          value: "คลินิกสัตวแพทย์",
                          label: "คลินิกสัตวแพทย์",
                        },
                        {
                          value: "สภาเภสัชกรรม",
                          label: "สภาเภสัชกรรม",
                        },
                        {
                          value: "บริษัทยา",
                          label: "บริษัทยา",
                        },
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="ชื่อสถานที่ทำงาน" className=" w-full">
                    <Input placeholder="input ID" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[8, 8]}>
                <Col span={12}>
                  <Form.Item label="ตำแหน่ง" className=" w-full">
                    <Select
                      options={[
                        { value: "แพทย์", label: "แพทย์" },
                        { value: "ทันตแพทย์", label: "ทันตแพทย์" },
                        { value: "พยาบาลวิชาชีพ", label: "พยาบาลวิชาชีพ" },
                        { value: "นักกายบำบัด", label: "นักกายบำบัด" },
                        {
                          value: "นักเทคนิคการแพทย์",
                          label: "นักเทคนิคการแพทย์",
                        },
                        {
                          value: "นักรังสีการแพทย์",
                          label: "นักรังสีการแพทย์",
                        },
                        {
                          value: "นักกิจกรรมบำบัด",
                          label: "นักกิจกรรมบำบัด",
                        },
                        {
                          value: "นักโภชนาการ/นักกำหนดอาหาร",
                          label: "นักโภชนาการ/นักกำหนดอาหาร",
                        },
                        {
                          value: "นักจิตวิทยา",
                          label: "นักจิตวิทยา",
                        },
                        {
                          value: "นักการแพทย์แผนไทย",
                          label: "นักการแพทย์แผนไทย",
                        },
                        {
                          value: "นักวิชาการสาธารณสุข",
                          label: "นักวิชาการสาธารณสุข",
                        },
                        {
                          value: "นักสังคมสงเคราะห์",
                          label: "นักสังคมสงเคราะห์",
                        },
                        {
                          value: "อาจารย์มหาวิทยาลัย",
                          label: "อาจารย์มหาวิทยาลัย",
                        },
                        {
                          value: "ผู้เชี่ยวชาญ",
                          label: "ผู้เชี่ยวชาญ",
                        },
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="หมายเลขโทรศัพท์ที่ทำงาน"
                    className=" w-full">
                    <Input placeholder="input ID" />
                  </Form.Item>
                </Col>
              </Row>
            </div>
            <div class={page !== 3 ? "hidden" : "null"}>
              <div className=" text-left text-[#0e286b] font-bold">
                ประวัติการศึกษาและประสบการณ์การทำงาน
              </div>
              <Divider />
              <Row gutter={[8, 8]}>
                <Col span={24}>
                  <Form.Item label="ประวัติการศึกษา " className=" w-full">
                    <Input.TextArea rows={6} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[8, 8]}>
                <Col span={24}>
                  <Form.Item label="ประสบการณ์การทำงาน" className=" w-full">
                    <Input.TextArea rows={6} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[8, 8]}>
                <Col span={24}>
                  <Form.Item label="ความเชี่ยวชาญ" className=" w-full">
                    <Input.TextArea rows={6} />
                  </Form.Item>
                </Col>
              </Row>
            </div>
            <div class={page !== 4 ? "hidden" : "null"}>
              <div className=" text-left text-[#0e286b] font-bold">
                TeleHealth Thailand
              </div>
              <div className="text-xs">กรุณาแนบรายละเอียด ดังนี้</div>
              <Divider />
              <div className="text-[#0e286b]">
                วันและเวลาในการทำงานบนแพลตฟอร์ม TeleHealth Thailand
                (ระบุทั้งเวลาเริ่มต้นและเวลาสิ้นสุด){" "}
                <font className="text-red-700">*</font>
              </div>
              <Row>
                <Col span={8}></Col>
                <Col span={8}>
                  <div className=" border-[#B8BDC9] border border-solid text-center bg-[#E5EAF4] text-[#0e286b] text-md h-10 flex items-center justify-center">
                    เวลาเริ่มต้น
                  </div>
                </Col>
                <Col span={8}>
                  <div className=" border-[#B8BDC9]  border border-solid text-center bg-[#E5EAF4] text-[#0e286b] h-10 flex items-center justify-center">
                    เวลาสิ้นสุด
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <div className="border-[#B8BDC9] border border-solid text-center bg-[#E5EAF4] text-[#0e286b] text-md h-10 flex items-center justify-center">
                    วันจันทร์
                  </div>
                </Col>
                <Col span={8}>
                  <div className="border-[#B8BDC9] border border-solid px-4  text-[#0e286b] h-10 flex items-center justify-center text-center ">
                    <Select className="w-full" options={options} />
                  </div>
                </Col>
                <Col span={8}>
                  <div className="border-[#B8BDC9] border border-solid px-4  text-[#0e286b] h-10 flex items-center justify-center text-center ">
                    <Select className="w-full" options={options} />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <div className="border-[#B8BDC9] border border-solid text-center bg-[#E5EAF4] text-[#0e286b] text-md h-10 flex items-center justify-center">
                    วันอังคาร
                  </div>
                </Col>
                <Col span={8}>
                  <div className="border-[#B8BDC9] border border-solid px-4  text-[#0e286b] h-10 flex items-center justify-center text-center ">
                    <Select className="w-full" options={options} />
                  </div>
                </Col>
                <Col span={8}>
                  <div className="border-[#B8BDC9] border border-solid px-4  text-[#0e286b] h-10 flex items-center justify-center text-center ">
                    <Select className="w-full" options={options} />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <div className="border-[#B8BDC9] border border-solid text-center bg-[#E5EAF4] text-[#0e286b] text-md h-10 flex items-center justify-center">
                    วันพุธ
                  </div>
                </Col>
                <Col span={8}>
                  <div className="border-[#B8BDC9] border border-solid px-4  text-[#0e286b] h-10 flex items-center justify-center text-center ">
                    <Select className="w-full" options={options} />
                  </div>
                </Col>
                <Col span={8}>
                  <div className="border-[#B8BDC9] border border-solid px-4  text-[#0e286b] h-10 flex items-center justify-center text-center ">
                    <Select className="w-full" options={options} />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <div className="border-[#B8BDC9] border border-solid text-center bg-[#E5EAF4] text-[#0e286b] text-md h-10 flex items-center justify-center">
                    พฤหัสบดี
                  </div>
                </Col>
                <Col span={8}>
                  <div className="border-[#B8BDC9] border border-solid px-4  text-[#0e286b] h-10 flex items-center justify-center text-center ">
                    <Select className="w-full" options={options} />
                  </div>
                </Col>
                <Col span={8}>
                  <div className="border-[#B8BDC9] border border-solid px-4  text-[#0e286b] h-10 flex items-center justify-center text-center ">
                    <Select className="w-full" options={options} />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <div className="border-[#B8BDC9] border border-solid text-center bg-[#E5EAF4] text-[#0e286b] text-md h-10 flex items-center justify-center">
                    วันศุกร์
                  </div>
                </Col>
                <Col span={8}>
                  <div className="border-[#B8BDC9] border border-solid px-4  text-[#0e286b] h-10 flex items-center justify-center text-center ">
                    <Select className="w-full" options={options} />
                  </div>
                </Col>
                <Col span={8}>
                  <div className="border-[#B8BDC9] border border-solid px-4  text-[#0e286b] h-10 flex items-center justify-center text-center ">
                    <Select className="w-full" options={options} />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <div className="border-[#B8BDC9] border border-solid text-center bg-[#E5EAF4] text-[#0e286b] text-md h-10 flex items-center justify-center">
                    วันเสาร์
                  </div>
                </Col>
                <Col span={8}>
                  <div className="border-[#B8BDC9] border border-solid px-4  text-[#0e286b] h-10 flex items-center justify-center text-center ">
                    <Select className="w-full" options={options} />
                  </div>
                </Col>
                <Col span={8}>
                  <div className="border-[#B8BDC9] border border-solid px-4  text-[#0e286b] h-10 flex items-center justify-center text-center ">
                    <Select className="w-full" options={options} />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <div className="border-[#B8BDC9] border border-solid text-center bg-[#E5EAF4] text-[#0e286b] text-md h-10 flex items-center justify-center">
                    วันอาทิตย์
                  </div>
                </Col>
                <Col span={8}>
                  <div className="border-[#B8BDC9] border border-solid px-4  text-[#0e286b] h-10 flex items-center justify-center text-center ">
                    <Select className="w-full" options={options} />
                  </div>
                </Col>
                <Col span={8}>
                  <div className="border-[#B8BDC9] border border-solid px-4  text-[#0e286b] h-10 flex items-center justify-center text-center ">
                    <Select className="w-full" options={options} />
                  </div>
                </Col>
              </Row>
              <Row gutter={[8, 8]} className="mt-8">
                <Col span={12}>
                  <Form.Item label="สำเนาบัตรประชาชน">
                    <Form.Item
                      name="dragger"
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                      noStyle>
                      <Upload.Dragger name="files" action="/upload.do">
                        <p className="ant-upload-drag-icon">
                          <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Browse Files</p>
                        <p className="ant-upload-hint">
                          Drag and drop file here
                        </p>
                      </Upload.Dragger>
                    </Form.Item>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="สำเนาบัตรประชาชน">
                    <Form.Item
                      name="dragger"
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                      noStyle>
                      <Upload.Dragger name="files" action="/upload.do">
                        <p className="ant-upload-drag-icon">
                          <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Browse Files</p>
                        <p className="ant-upload-hint">
                          Drag and drop file here
                        </p>
                      </Upload.Dragger>
                    </Form.Item>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[8, 8]} className="">
                <Col span={12}>
                  <Form.Item label="สำเนาทะเบียนบ้าน">
                    <Form.Item
                      name="dragger"
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                      noStyle>
                      <Upload.Dragger name="files" action="/upload.do">
                        <p className="ant-upload-drag-icon">
                          <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Browse Files</p>
                        <p className="ant-upload-hint">
                          Drag and drop file here
                        </p>
                      </Upload.Dragger>
                    </Form.Item>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="สำเนาใบอนุญาตประกอบวิชาชีพ">
                    <Form.Item
                      name="dragger"
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                      noStyle>
                      <Upload.Dragger name="files" action="/upload.do">
                        <p className="ant-upload-drag-icon">
                          <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Browse Files</p>
                        <p className="ant-upload-hint">
                          Drag and drop file here
                        </p>
                      </Upload.Dragger>
                    </Form.Item>
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item label="เอกสารหลักฐานการอบรมเภสัชกรรมทางไกล (สำหรับเภสัชกรเท่านั้น)">
                <Form.Item
                  name="dragger"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  noStyle>
                  <Upload.Dragger name="files" action="/upload.do">
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Browse Files</p>
                    <p className="ant-upload-hint">Drag and drop file here</p>
                  </Upload.Dragger>
                </Form.Item>
              </Form.Item>
            </div>
            <div class={page !== 5 ? "hidden" : "null"}>
              <div className=" text-left text-[#0e286b] font-bold">
                ระบบการยืนยันตัวตนบุคลากรทางการแพทย์
              </div>
              <div className="text-xs">Authentication System</div>
              <Divider />
              <Row gutter={[8, 8]} className="mt-8 ">
                <Col span={12} className="w-auto flex items-center ">
                  <img
                    className="w-32 md:w-64"
                    src="https://www.chem-ou.com/manage/uploads/2021/verify05.jpg"></img>
                </Col>
                <Col span={12}>
                  <Form.Item label="ขั้นตอนที่ 1 กรุณาถ่ายรูปคู่บัตรประชาชน">
                    <Form.Item
                      name="dragger"
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                      noStyle>
                      <Upload.Dragger name="files" action="/upload.do">
                        <p className="ant-upload-drag-icon">
                          <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Browse Files</p>
                        <p className="ant-upload-hint">
                          Drag and drop file here
                        </p>
                      </Upload.Dragger>
                    </Form.Item>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[8, 8]} className="mt-8 ">
                <Col span={12} className="w-auto flex items-center  ">
                  <img
                    className="w-32 md:w-64"
                    src="https://hilight.kapook.com/img_cms2/user/patcharin/2022/hilight/card1.jpg"></img>
                </Col>
                <Col span={12}>
                  <Form.Item label="ขั้นตอนที่ 2 กรุณาถ่ายรูปหน้าบัตรประชาชน">
                    <Form.Item
                      name="dragger"
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                      noStyle>
                      <Upload.Dragger name="files" action="/upload.do">
                        <p className="ant-upload-drag-icon">
                          <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Browse Files</p>
                        <p className="ant-upload-hint">
                          Drag and drop file here
                        </p>
                      </Upload.Dragger>
                    </Form.Item>
                  </Form.Item>
                </Col>
              </Row>
            </div>
            <div className="flex items-center justify-center gap-4 ">
              <Form.Item>
                <Button
                  className="w-20"
                  onClick={backPage}
                  disabled={page <= 1}>
                  Back
                </Button>
              </Form.Item>

              <div class={page >= 5 ? "hidden" : "null"}>
                <Form.Item>
                  <Button type="primary" className="w-20" onClick={nextPage}>
                    Next
                  </Button>
                </Form.Item>
              </div>

              <div class={page !== 5 ? "hidden" : "null"}>
                <Form.Item>
                  <Button type="primary" className="w-20" onClick={form.submit}>
                    Submit
                  </Button>
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </Card>
    </div>
  );
}

export default App;
