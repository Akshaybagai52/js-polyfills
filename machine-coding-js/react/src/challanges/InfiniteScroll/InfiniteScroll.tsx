import React, { useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const InfiniteScroll = () => {
  const [data, setData] = useState<Post[]>([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${page * 10}`
      );
      const res: Post[] = await response.json();
      setData(res);
      setPage(page + 1);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  const myThrottle = (cb: Function, d: number) => {
    let last = 0;
    return (...args: any) => {
      let now = new Date().getTime();
      if (now - last < d) return;
      last = now;
      return cb(...args);
    };
  };

  const handleScroll = myThrottle(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 500 >  //windown.innerHeight = viewPort which is visible to user
      document.documentElement.offsetHeight   //document.documentElement.offsetHeight = full height of html
    ) {
      fetchData();
    }
  }, 500);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main className="grid grid-cols-4 gap-6">
      {data?.map((item) => (
        <section key={item?.id} className="border-amber-600 border-2 p-4">
          <div className="font-bold mb-2">{item?.title}</div>
          <div>{item?.body}</div>
        </section>
      ))}
    </main>
  );
};

export default InfiniteScroll;
