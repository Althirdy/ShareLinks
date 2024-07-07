import React, { useContext, useRef, useState } from 'react'
import toast from 'react-hot-toast';
import { LinksContext } from 'src/Context/ApiContext';
import { defaultImg } from 'src/Data/Platform';

export default function Profile() {

  const { profile, setProfile } = useContext(LinksContext)
  const maxChars = 200;

  const fileInputRef = useRef(null);
  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const validTypes = ['image/png', 'image/jpeg', 'image/bmp'];

    if (file && validTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfile(prev => ({ ...prev, imgSrc: e.target.result }))
        toast.success('Profile Updated!')
      };
      reader.readAsDataURL(file);
    } else {
      toast.error("Invalid file type. Only PNG, JPG, and BMP files are allowed.")
    }
    event.target.value = null;
  };

  const handleDeleteProfile = () => {
    setProfile(prev => ({ ...prev, imgSrc: defaultImg }))
    toast.success('Profile Removed!')
  }

  const HandleInputChange = (e) => {
    const { name, value } = e.target;


    const truncatedValue = name === 'Description' ? value.slice(0, maxChars) : value;

    setProfile(prev => ({
      ...prev,
      [name]: truncatedValue
    }));
  }



  return (
    <div className='space-y-4'>
      <div>
        <h1 className='font-bold text-2xl tracking-tight'>Profile Details</h1>
        <p className='text-gray-700 text-sm'>Add your details to create a personal touch to your profile.</p>
      </div>
      {/* Profile */}
      {/* Profle Picture */}
      <div className='bg-gray-50 rounded-md p-4 grid grid-cols-1 lg:grid-cols-8 gap-2'>
        <div className='lg:col-span-3'>
          <div className='h-40 bg-gray-200 w-fullrounded-md cursor-pointer' onClick={handleDivClick}>
            <img src={profile.imgSrc} alt="" className='h-full w-full rounded-md object-cover' />
          </div>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </div>
        {/* End Profile Picture */}
        <div className='lg:col-start-5 lg:col-span-4 space-y-4'>
          <div>
            <h4 className='font-medium text-xl text-gray-800'>Profile Picture</h4>
            <p className='text-sm text-gray-700'>Image must be below 1024X1024px use PNG,JPG, or BMP format.</p>
          </div>
          {profile.imgSrc != defaultImg && <button onClick={handleDeleteProfile} className='bg-red-500 px-4 py-1.5 text-gray-50 rounded-md text-sm'>Remove Profile</button>}
        </div>
      </div>
      {/* Personal Information */}
      <div className='bg-gray-50 rounded-md p-4 space-y-4 '>
        <div>
          <h4 className='font-medium text-xl text-gray-800'>Profile Information</h4>
          <p className='text-sm text-gray-700'>Add/Edit/Update your personal Information</p>
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="FullName" className='text-sm flex justify-between'>
            Full Name
            {!profile.FullName && <span className='text-xs text-red-600'>Required</span>}
          </label>
          <input type="text" name='FullName' value={profile.FullName} onChange={HandleInputChange} className='border rounded-md p-2 text-sm focus:outline-1 focus:outline-gray-700' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="Email" className='text-sm flex justify-between'>
            Email Address
            {!profile.Email && <span className='text-xs text-red-600'>Required</span>}
          </label>
          <input type="text" name='Email' value={profile.Email} onChange={HandleInputChange} className='border rounded-md p-2 text-sm focus:outline-1 focus:outline-gray-700' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="Description" className='text-sm flex justify-between'>
            Short Description
            {!profile.Description && <span className='text-xs text-red-600'>Required</span>}
          </label>
          <textarea type="text" name='Description' rows={5} value={profile.Description} onChange={HandleInputChange} className='border rounded-md resize-none p-2 text-sm focus:outline-1 focus:outline-gray-700' />
          <span className='text-sm text-gray-500'>{profile.Description.length} / {maxChars} characters</span>
        </div>
      </div>
    </div>
  )
}
