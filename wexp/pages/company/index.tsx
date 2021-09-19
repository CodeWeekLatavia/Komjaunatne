import { GetServerSideProps } from "next";
import Link from "next/link";
import Image from "next/image";
import AuthHero from "../../components/AuthHero";

interface Employee {
  name: string;
  description: string;
}

export default function Company(props:any) {
  let employerCardsHTML = props.data.map((employer: Employee, index:number) => (
    <div className="col-4 p-3" key={employer.name+" "+index}>
    <div className="card py-4 shadow-sm give-me-food-pls">
      <div className="card-body">
        <div className="py-2">
        <Image src="/profile.png" width="100px" height="100px"></Image>
        </div>
        <h5 className="card-title">{employer.name}</h5>
        <p className="card-text">
          With supporting text below as a natural leand-in to additional
          content.
        </p>
        <div className="mt-5">
        <Link href="#about-us">
          <a className="rounded py-1 px-4 border fw-normal my-2 text-decoration-none light-button">
            Open profile
          </a>
        </Link>
        </div>
      </div>
    </div>
    </div>
  ));
  return (
    <div>
      <div className="container ">
        <div className="mb-5">
          <h2 className="text-center py-4">For Companies - Start Your Journey Here</h2>
          <AuthHero context='company'/>
        </div>
        <div className="text-center mt-5 pt-5">
          <h3>Available Employees</h3>
          <p>Here are some of our registered employees</p>
          <div className="bg-dark w-100 py-1 text-white">
            <a>Filter Settings &#x2193;</a>
          </div>
          <div className="d-flex flex-wrap">{employerCardsHTML}</div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data: Employee[] = [
    {
      name: "Ayana Power",
      description: "Looking for a front-end developer",
    },
    {
      name: "Colton Tran",
      description: "Looking for a back-end developer",
    },
    {
      name: "Nishat Amin",
      description: "Looking for a back-end developer",
    },
    {
      name: "Lilly-Rose Wilks",
      description: "Looking for a back-end developer",
    },
    {
      name: "Blade Rigby",
      description: "Looking for a back-end developer",
    },
    {
      name: "Maciej Mcdonald",
      description: "Looking for a back-end developer",
    }
  ];
  return { props: { data } };
};
