import Link from "next/link";

export default function Home() {
  return(
    <div>
      <div className="p-4 my-2 rounded-md border-b leading-9">
        <div className="font-bold ">Natural language Processing (NLP)</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis incidunt, ab nostrum a asperiores voluptas tempora, earum alias velit at facere sunt repellendus ullam vel odio recusandae. Maiores, deserunt repellendus!
        </div>

        <div className="w-full flex justify-end gap-4 mt-4 ">
          <Link className="bg-slate-200 px-4 py-2 rounded-md uppercase text-sm font-bold tracking-widest" href={'edit'}>Edit</Link>

          <button className="bg-red-500 text-white px-4 py-2 rounded-md uppercase text-sm font-bold tracking-widest">Delete</button>
        </div>
      </div>
    </div>
  )
}
