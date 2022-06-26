import React, { useState } from 'react';
import Link from 'next/link';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Seo from '@/components/Seo';
import Default from '@/components/layout/Default';
import InputField from '@/components/form-fields/InputField';

const registerFormInitial = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  confirm_password: '',
  position: 'client',
} as any;

const registerFormSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(1, 'Họ quá ngắn')
    .max(50, 'Họ quá dài')
    .required('Bắt buộc nhập họ'),
  last_name: Yup.string()
    .min(1, 'Tên quá ngắn')
    .max(50, 'Tên quá dài')
    .required('Bắt buộc nhập tên'),
  email: Yup.string()
    .email('Email không hợp lệ')
    .required('Bắt buộc nhập email'),
  password: Yup.string()
    .min(6, 'Mật khẩu quá ngắn')
    .required('Bắt buộc nhập mật khẩu'),
  confirm_password: Yup.string()
      .oneOf([Yup.ref('password')], 'Mật khẩu nhập lại không khớp')
      .required('Bắt buộc xác nhận mật khẩu')
});

const LoginPage = () => {
  const [isFailed, setIsFailed] = useState<boolean>(false);

  const onSubmit = (values: React.FormEvent<HTMLFormElement>) => {
    console.log(values);
    setIsFailed(true);
  };

  return (
    <>
      <Seo templateTitle='Đăng ký' />
      <Default>
        <div
          className='mx-auto rounded-md bg-white pt-4 pb-10 pl-10 pr-10'
          style={{ width: '500px' }}
        >
          <Formik
            initialValues={registerFormInitial}
            onSubmit={onSubmit}
            validationSchema={registerFormSchema}
          >
            {(formikProps) => (
              <Form>
                <h2 className='text-center'>Đăng ký</h2>
                <p className='m-0 mt-3 p-0'>
                  Bạn đã có tài khoản ?{' '}
                  <Link href={'/auth/login'}>
                    <a className='font-bold text-green-500'>Đăng nhập</a>
                  </Link>
                </p>
                <div className='mt-2' style={{ height: '20px' }}>
                  {isFailed && <p className='text-red-500'>Đăng ký thất bại</p>}
                </div>
                <div className='mt-2 flex'>
                  <div className='flex-50 pr-2'>
                    <InputField
                      label='Họ'
                      placeHolder='Nhập họ của bạn'
                      name='first_name'
                    />
                  </div>
                  <div className='flex-50'>
                    <InputField
                      label='Tên'
                      placeHolder='Nhập tên của bạn'
                      name='last_name'
                    />
                  </div>
                </div>
                <div className='mt-2'>
                  <InputField
                    label='Email'
                    placeHolder='Nhập email của bạn'
                    name='email'
                  />
                </div>
                <div className='mt-4'>
                  <InputField
                    label='Mật khẩu'
                    placeHolder='Nhập mật khẩu'
                    name='password'
                    type='password'
                  />
                </div>
                <div className='mt-4'>
                  <InputField
                    label='Xác nhận mật khẩu'
                    placeHolder='Nhập lại mật khẩu'
                    name='confirm_password'
                    type='password'
                  />
                </div>
                <div className='mt-4'>
                  <label htmlFor='type' className='font-bold'>
                    Nhu cầu của bạn
                  </label>
                  <select className='form-control' name="position">
                    <option value='client'>Khách hàng</option>
                    <option value='freelancer'>Freelancer</option>
                    <option value='recruiter'>Nhà tuyển dụng</option>
                    <option value='worker'>Tìm việc</option>
                  </select>
                </div>
                <div className='mt-6 flex justify-center'>
                  <button className='btn-primary' type='submit'>
                    Đăng ký
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Default>
    </>
  );
};

export default LoginPage;
