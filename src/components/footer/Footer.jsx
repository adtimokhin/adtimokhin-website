import FooterLink from "./FooterLink";

function Footer() {
  return (
    <footer className="grid grid-cols-12 w-screen h-fit bg-gray-900 p-10 font-serif text-base">
      <img
        src="/adtimokhinLOGO.svg"
        alt="adtimokhin logo"
        className="col-start-1 col-end-6"
      />
      <div className="col-start-6 col-end-9 text-center">
        <h2 className="text-gray-100 font-semibold">Ways to contact</h2>
        <ul className="font-serif text-base text-gray-100 space-y-4 pt-1">
          <li>
            <FooterLink link="mailto:adtimokhin@gmail.com" linkTitle="Email" />
          </li>
          <li>
            <FooterLink
              link="https://github.com/adtimokhin/"
              linkTitle="GitHub"
            />
          </li>
          <li>
            <FooterLink
              link="https://www.linkedin.com/in/aleksandr-timokhin-5300361b6/"
              linkTitle="LinknedIn"
            />
          </li>
          <li>
            <FooterLink
              link="https://www.instagram.com/adtimokhin/"
              linkTitle="Instagram"
            />
          </li>
          <li>
            <FooterLink link="#" linkTitle="Phone" />
          </li>
        </ul>
      </div>
      <div className="col-start-9 col-end-12 text-center">
        <h2 className="text-gray-100 font-semibold text-base">
          Some other links
        </h2>
        <ul className="font-serif text-base text-gray-100 space-y-4 pt-1">
          <li>
            <FooterLink
              link="https://www.youtube.com/channel/UCdITZxyfvLN6qLhm829eG2Q"
              linkTitle="#&!?8@"
            />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
