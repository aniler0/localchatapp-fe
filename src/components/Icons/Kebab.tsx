const Kebab = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM16 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      fill="#666668"
    />
  </svg>
);

export default Kebab;
