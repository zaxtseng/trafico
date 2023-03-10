export interface IHeader {
  logoImgV1: string;
  logoImgV2: string;
  btnText: string;
}
export interface INav {
  name: string;
  href: string;
}

export interface IHero {
  title: string;
  sceneImg: string;
  boyImg: string;
  girlImg: string;
  truckImg: string;
  btnText: string;
}

export interface IAbout {
  title: string;
  subtitle: string;
  text: string;
  boyImg: string;
}

export interface IHow {
  title: string;
  subtitle: string;
  girlImg: string;
}

export interface IFaq {
  pretitle: string;
  title: string;
  boyImg: string;
  accordions: IAccordion[];
}

export interface IAccordion {
  question: string;
  answer: string;
}

export interface ITestimonial {
  pretitle: string;
  title: string;
  clients: IClient[];
}

export interface IClient {
  message: string;
  image: string;
  name: string;
}

export interface IFooter {
  truckImg: string;
  hillImg: string;
  text: string;
  logo: string;
  links: Link[];
  form: Form;
}

interface Form {
  labelName: string;
  placeholderName: string;
  labelEmail: string;
  placeholderEmail: string;
  btnText: string;
}

interface Link {
  name: string;
  href: string;
}