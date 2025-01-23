type NavigationLinkProps = {
  navigationLink: string;
  title: string;
};

export default function NewsListNavigationLink({
  navigationLink,
  title,
}: NavigationLinkProps) {
  return (
    <div className="border-b border-dotted border-black">
      <a href={navigationLink} className="cursor-pointer text-sm">
        More {title} &gt;
      </a>
    </div>
  );
}
