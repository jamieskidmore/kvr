export default function Pills({ array }: { array: string[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mx-auto text-lg">
      {array.map((item) => (
        <div className="text-center bg-text-gray text-text-white px-2 rounded-2xl font-semibold">
          {item}
        </div>
      ))}
    </div>
  );
}
