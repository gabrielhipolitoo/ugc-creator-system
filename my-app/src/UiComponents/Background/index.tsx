export const Background = () => {
  const url =
    "https://images.unsplash.com/photo-1733280881956-849e1c2b24bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dWdjJTIwY3JlYXRvcnxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <div
      className="w-[50%]  h-[600px] rounded-lg bg-cover bg-center bg-no-repeat 2xl:h-10/12"
      style={{ backgroundImage: `url('${url}')` }}
    />
  );
};
