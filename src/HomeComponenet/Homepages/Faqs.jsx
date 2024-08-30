import { useState } from "react";
import { Link } from "react-router-dom";

const Faqs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [electBill, setElectBill] = useState(false);
  const [tv, setTv] = useState(false);
  const [wallet, setWallet] = useState(false);
  const [trust, setTrust] = useState(false);
  const [question, setQuestion] = useState(false);
  const dropDown = () => {
    setIsOpen(!isOpen);
  };
  const drop2 = () => {
    setElectBill(!electBill);
  };
  const drop3 = () => {
    setTv(!tv);
  };
  const drop4 = () => {
    setWallet(!wallet);
  };
  const drop5 = () => {
    setTrust(!trust);
  };
  const drop6 = () => {
    setQuestion(!question);
  };
  return (
    <div className="py-5">
      <div className="px-4 py-9">
        <h2 className="w-fit py-2 px-4 mx-auto bg-blue-300 rounded-full text-blue-500 font-bold text-center">
          F.A.Q
        </h2>
        <h1 className="text-center capitalize text-2xl font-extrabold py-3">
          Frequently Asked <span className="text-red-500">Questions</span>
        </h1>
        <nav>
          <div className=" list-none pt-3">
            <li onClick={dropDown} className="py-4">
              <Link className="capitalize text-xl">
                will my transactions be fulfiled immediately i make payments
              </Link>
              {isOpen && (
                <div className="">
                  <p>
                    In a bid to provide the best of service to our esteemed
                    customers, all transactions have been design to be executed
                    promptly. We have made all service delivery processes fully
                    automated. In other words, you can be rest assured that your
                    requests will be executed instantly.
                  </p>
                </div>
              )}
            </li>
            <li onClick={drop2} className="py-4">
              <Link className="capitalize text-xl">
                how do i pay for my electricity bills
              </Link>
              {electBill && (
                <div className="">
                  <p>
                    Bill payments for both prepaid and postpaid electricity
                    bills have been made very easy with just the click of a
                    button. Simply select the distribution company you fall
                    under, followed by your billing method i.e. either Prepaid
                    (for metered customers) or Postpaid (for customer who are
                    billed monthly). For prepaid billing, your token is sent
                    instantly via SMS or email to the phone number or email
                    address provided in your account.
                  </p>
                </div>
              )}
            </li>
            <li onClick={drop3} className="py-4">
              <Link className="capitalize text-xl">
                will i be re-connected immediately i pay my Tv subscription
              </Link>
              {tv && (
                <div className="">
                  <p>
                    Yes you will. Simple make sure your decoder is on at the
                    time of payment and kindly cross-check carefully your Smart
                    Card/IUC number before submission.
                  </p>
                </div>
              )}
            </li>
            <li onClick={drop4} className="py-4">
              <Link className="capitalize text-xl">
                how do i pay for my electricity bills
              </Link>
              {wallet && (
                <div className="">
                  <p>
                    You can fund your wallet through cash transfer or Bank
                    deposit to the account number provided on our website.
                    Please ensure to notify us about the deposit/transfer so we
                    can credit your wallet immediately. <br />
                    Secondly you can fund your account online (through
                    Paystack).
                  </p>
                </div>
              )}
            </li>
            <li onClick={drop5} className="py-4">
              <Link className="capitalize text-xl">
                can i trust nobleDataHub
              </Link>
              {trust && (
                <div className="">
                  <p>
                    Yes you can. We are a legitimate business firm duly
                    registered with the Corporate Affairs Commission (CAC) of
                    Nigeria. So you can be rest assured that your transaction
                    with us is safe, secure and reliable.
                  </p>
                </div>
              )}
            </li>
            <li onClick={drop6} className="py-4">
              <Link className="capitalize text-xl">
                your question is not covered under this page?
              </Link>
              {question && (
                <div className="">
                  <p>
                    Please kindly contact our Corporate Support Center on
                    08122577135 or support@iriseicthub.com and we'll get back to
                    you immediately.
                  </p>
                </div>
              )}
            </li>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Faqs;
