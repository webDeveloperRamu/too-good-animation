const navbarList = [
    {
        name: "QuickBooks Solutions",
        href: "-1",
        banner: "/assets/images/02/qb-hosting/qb-nav-banner.webp",
        text: "",
        btns: `
      <a style="border:1px solid #35DA3C;padding-block:8px;border-radius:40px;display:flex;align-items:center;justify-content:center;gap:10px;" href="/buy-quickbooks-license">
      <img src="assets/images/header/qb_buy.svg" width={45} height={45} />
      <span style="color:black">Buy QuickBooks</span>
      </a>
          `,
        children: [
            {
                name: "QuickBooks Hosting",
                href: "/quickbooks-hosting",
                img: "/assets/images/header/qb_hosting.svg",
            },
            {
                name: "QuickBooks Pro Hosting",
                img: "/assets/images/header/qb_desktop.svg",
                href: "/quickbooks-pro-hosting",
            },
            {
                img: "/assets/images/header/qb_premire.svg",
                name: "QuickBooks Premier Hosting",
                href: "/quickbooks-premier-hosting",
            },
            {
                img: "/assets/images/header/qb_enterprise.svg",
                name: "QuickBooks Enterprise Hosting",
                href: "/quickbooks-enterprise-hosting",
            },
            {
                img: "/assets/images/header/qb_point.svg",
                name: "QuickBooks POS Hosting",
                href: "/quickbooks-pos-hosting",
            },
            {
                img: "/assets/images/header/qb_ads.svg",
                name: "QuickBooks Add-ons Hosting",
                href: "/quickbooks-add-ons-hosting",
            },
        ],
    },
    {
        name: "Sage Applications",
        href: "-1",
        text: "",
        btns: `
      <div style="display:flex;align-items:center;justify-content:space-between;">
      <span style="display:inline-flex;gap:20px; align-items:center;">
      <img src='/assets/images/header/sage150.svg'/>
      <span style="width:1px;border:1px solid rgba(0, 0, 0, 0.4);height:25px;"></span>
      <img src='/assets/images/header/sage15.svg'/>
      </span>
      <a style='background:#0151c1;border-radius:8px;padding:15px 50px;color:white;' href='/trial'> Try Now</a>
      </div>
      `,
        banner: "/assets/images/02/qb-hosting/qb-nav-banner.webp",
        children: [
            {
                name: "Sage Hosting",
                href: "/sage-hosting",
                img: "/assets/images/header/qb_hosting.svg",
            },
            {
                name: "Sage 50 Hosting",
                href: "/sage-50-hosting",
                img: "/assets/images/header/qb_hosting.svg",
            },
            {
                name: "Sage 100 ERP Hosting",
                href: "/sage-100-erp-hosting",
                img: "/assets/images/header/qb_hosting.svg",
            },
            {
                name: "Sage 300 ERP Hosting",
                href: "/sage-300-erp-hosting",
                img: "/assets/images/header/qb_hosting.svg",
            },
            {
                name: "Sage 500 ERP Hosting",
                href: "/sage-500-erp-hosting",
                img: "/assets/images/header/qb_hosting.svg",
            },
        ],
    },
    {
        name: "Tax Software",
        href: "-1",
        btns: "",
        text: "",
        banner: "/assets/images/02/qb-hosting/qb-nav-banner.webp",
        children: [
            {
                name: "Tax Software Hosting",
                href: "/tax-software-hosting",
                img: "/assets/images/header/qb_hosting.svg",
            },
            {
                name: "Drake Tax Software Hosting",
                href: "/drake-tax-software-hosting",
                img: "/assets/images/header/qb_hosting.svg",
            },
            {
                name: "UltraTax CS Hosting",
                href: "/ultratax-cs-hosting",
                img: "/assets/images/header/qb_hosting.svg",
            },
            {
                name: "Lacerte Hosting",
                href: "/lacerte-hosting",
                img: "/assets/images/header/qb_hosting.svg",
            },
            {
                name: "ProSeries Tax Software Hosting",
                href: "/proseries-taxsoftware-hosting",
                img: "/assets/images/header/qb_hosting.svg",
            },
            {
                name: "TaxWise Hosting",
                img: "/assets/images/header/qb_hosting.svg",

                href: "/taxwise-hosting",
            },
            {
                name: "ATX Tax Hosting",
                href: "/atx-tax-software-hosting",
                img: "/assets/images/header/qb_hosting.svg",
            },
            {
                name: "TaxAct Software Hosting",
                href: "/taxact-software-hosting",
                img: "/assets/images/header/qb_hosting.svg",
            },
            {
                name: "Tax1099 Hosting",
                href: "/tax1099-hosting",
                img: "/assets/images/header/qb_hosting.svg",
            },
            {
                name: "TaxDome Hosting",
                href: "/taxdome-hosting",
                img: "/assets/images/header/qb_hosting.svg",
            },
        ],
    },
    {
        name: "Other Services",
        href: "-1",
        text: "",
        btns: "",
        banner: "/assets/images/02/qb-hosting/qb-nav-banner.webp",
        children: [
            {
                name: "Small Business",
                href: "/small-business-hosting",
                img: "/assets/images/header/qb_hosting.svg",
            },
            {
                name: "Law Firm Hosting",
                img: "/assets/images/header/qb_hosting.svg",

                href: "/law-firms-hosting",
            },
            {
                name: "Virtual Desktop",
                href: "/hosted-virtual-desktop-solutions",
                img: "/assets/images/header/qb_hosting.svg",
            },
            {
                name: "Managed IT Services",
                href: "/managed-it-services-near-me",
                img: "/assets/images/header/qb_hosting.svg",
            },
        ],
    },
    {
        name: "Resources",
        href: "-1",
        text: "Get Help",
        btns: `
      <div style='border-top:1px solid rgba(0,0,0,40%); display:flex;align-items:center;justify-content:flex-end; gap:9px; width:100%; padding-top:10px;right:-3%;position:absolute'>
      <span style='font-size:14px ;cursor:pointer;background:white;border-radius:12px;background:#E3E3E3; padding:16px 29px;position:absolute;top:10px;right:45%' onclick='$zoho.salesiq.floatwindow.open();'>Chat</span>
      <a style='background:#0151c1;border-radius:8px;padding:15px 50px;color:white;position:absolute;top:10px;right:-5%' href='tel:+1-855-922-7243'> Call Now</a>
      </div>
      `,
        banner: "/assets/images/02/qb-hosting/qb-nav-banner.webp",
        children: [
            {
                name: "Support",
                href: "/support",
                // img: "/assets/images/header/qb_hosting.svg",
                img: "",
                //   svgs:<div style={{boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2)",borderRadius:"8px",padding:"5px"}}><BiSupport size={35} color="blue"/></div>
            },
            {
                name: "Videos",
                href: "/videos",
                img: "/assets/images/header/qb_hosting.svg",
                //   svgs:<div style={{boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2)",borderRadius:"8px",padding:"5px"}}>  <TfiVideoClapper color="blue" size={35}/></div>
            },
            {
                name: "Status Page",
                href: "https://status.thesagenext.com/",
                img: "/assets/images/header/statusicon.svg",
            },
            {
                name: "Contact Us",
                href: "/contact-us",
                //   svgs:<div style={{boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2)",borderRadius:"8px",padding:"5px"}}><LuPhoneCall size={35} color="blue"/></div>
                // img: "/assets/images/header/qb_hosting.svg",
            },
            {
                name: "About Us",
                href: "/about-us",
                //   svgs:<div style={{boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",borderRadius:"8px",padding:"5px"}}><BsInfoCircle size={35} color="blue"/></div>
            },
            {
                name: "Blog",
                href: "/blog",
                img: "/assets/images/header/blogsvg.svg",
            },
        ],
    },
];
export default navbarList