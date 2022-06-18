export default function CounterWidget(props) {

 return (
     <div
        className="px-4 py-5 bg-gradient-to-tl from-red-400 to-pink-400 shadow-md rounded-lg overflow-hidden sm:p-6">
        <dt className="text-sm font-medium text-white truncate">{props.vm.title}</dt>
        <dd className="mt-1 text-3xl font-semibold text-white">{props.vm.countValue}</dd>
     </div>
    
  )
}