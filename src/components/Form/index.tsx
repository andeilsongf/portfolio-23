'use client'
import axios from 'axios'

export default function Form({ ...children }) {
  async function handleSubmit(e: any) {
    e.preventDefault()

    // Use fetch or axios to submit the form
    await axios
      .post(
        'https://formeezy.com/api/v1/forms/64e3e52a62b3b40008ab6065/submissions',
        new FormData(e.target),
      )
      .then(({ data }) => {
        const { redirect } = data
        window.location.href = redirect
      })
  }

  return (
    <form onSubmit={handleSubmit} className="pb-4 pt-[10px]" {...children}>
      <label
        htmlFor="email"
        className="flex border-b border-gray-100 py-4 dark:border-white/10"
      >
        <span className="mr-2 text-16 font-medium text-black-200 dark:text-white">
          Email:
        </span>
        <input
          type="email"
          name="email"
          placeholder="Enter your best email address"
          className="w-full bg-transparent text-16 text-gray-300 outline-none placeholder:text-gray-300  dark:text-gray-200 dark:placeholder-gray-200"
          required
        />
      </label>
      <label
        htmlFor="name"
        className="flex border-b border-gray-100 py-4 dark:border-white/10"
      >
        <span className="mr-2 text-16 font-medium text-black-200 dark:text-white">
          Name:
        </span>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="w-full bg-transparent text-16 text-gray-300 outline-none placeholder:text-gray-300  dark:text-gray-200 dark:placeholder-gray-200"
          required
        />
      </label>
      <label
        htmlFor="message"
        className="flex border-b border-gray-100 pb-8 pt-4 dark:border-white/10"
      >
        <span className="mr-2 text-16 font-medium text-black-200 dark:text-white">
          Subject:
        </span>
        <input
          type="text"
          name="message"
          placeholder="Enter subject"
          className="w-full bg-transparent text-16 text-gray-300 outline-none placeholder:text-gray-300  dark:text-gray-200 dark:placeholder-gray-200"
          required
        />
      </label>
      <textarea
        name=""
        id=""
        cols={30}
        rows={10}
        placeholder="Write your message here"
        className="mt-8 w-full rounded-xl bg-whitetheme-gray-100 p-6 text-gray-300 placeholder-gray-300 outline-none placeholder:text-gray-200 dark:bg-black-300 dark:text-gray-200 dark:placeholder-gray-200"
      ></textarea>
      <div className="mb-4 mt-7 flex justify-end">
        <button
          type="submit"
          className="gradient-gray dark:box-shadow-sm mb-4 w-full flex-1 cursor-pointer items-center justify-center rounded-[9px] px-8 py-4 text-center text-18 font-medium text-white lg:mb-0 lg:w-fit lg:flex-none"
        >
          Send
        </button>
      </div>
    </form>
  )
}
