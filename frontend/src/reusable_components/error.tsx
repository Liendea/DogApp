type ErrorProps = {
  message: string;
};

export default function Error({ message }: ErrorProps) {
  return (
    <div className="flex items-center p-4 my-8 bg-secondary rounded-xl w-100 mx-auto">
      <div className="border-2 border-[#FF0000] h-8 w-8 rounded-full text-center text-[#FF0000] font-bold">
        !
      </div>
      <p className="my-0 mx-auto font-medium">{message}</p>
    </div>
  );
}
