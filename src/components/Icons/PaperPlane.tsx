const PaperPlane = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.592 2.712 2.38 7.25H7.25a.75.75 0 1 1 0 1.5H2.38l-.788 4.538L13.929 8 1.592 2.712ZM.989 8 .064 2.68a1.341 1.341 0 0 1 1.85-1.462l13.402 5.744a1.13 1.13 0 0 1 0 2.076L1.913 14.782a1.341 1.341 0 0 1-1.85-1.463L.99 8Z"
        fill="#8E8E93"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default PaperPlane;
