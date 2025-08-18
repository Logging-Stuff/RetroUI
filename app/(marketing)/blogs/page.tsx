import { allBlogs } from "@/.contentlayer/generated";
import { Avatar, Card, Text } from "@/components/retroui";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { format } from "date-fns";

function page() {
  const blogs = allBlogs
    .filter((blog) => blog.status === "published")
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return (
    <div>
      <Text as="h1" className="mb-12">
        All RetroUI Blogs
      </Text>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {blogs.map((blog) => (
          <Link href={`${blog.url}`} key={blog._id}>
            <Card className="shadow-none hover:-translate-x-2 hover:-translate-y-2 hover:shadow-lg">
              <Card.Header>
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  width={600}
                  height={400}
                  className="mb-6"
                />
                <Text as="p" className="mb-2 text-sm text-muted-foreground">
                  {format(new Date(blog.publishedAt), "dd, MMMM yyyy")}
                </Text>
                <Card.Title className="line-clamp-2 font-sans font-bold text-2xl">{blog.title}</Card.Title>
               
                {/* <Card.Description className="line-clamp-3">{blog.description}</Card.Description> */}
              </Card.Header>
              <Card.Content className="pt-0">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <Avatar.Image src={blog.author.avatar} />
                    <Avatar.Fallback>{blog.author.name[0]}</Avatar.Fallback>
                  </Avatar>
                  <Text className="font-medium">{blog.author.name}</Text>
                </div>
               
              </Card.Content>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default page;
