type NavigationLinkProps = {
  navigationLink: string;
  title: string;
};

export default function NewsListNavigationLink({
  navigationLink,
  title,
}: NavigationLinkProps) {
  return (
    <div className="max-w-screen-xl mx-auto border-b border-dotted border-black">
      <a href={navigationLink} className="text-black cursor-pointer text-sm">
        More {title} &gt;
      </a>
    </div>
  );
}
