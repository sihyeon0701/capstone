export function ImgWithShadow() {
  return (
    <div className="flex items-center justify-center w-full h-96 lg:w-11/12 overflow-hidden">
      <img
        className="object-cover w-full h-full mx-auto rounded-md max-w-full lg:max-w-4xl"
        src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
      />
    </div>
  );
}

export default ImgWithShadow;
