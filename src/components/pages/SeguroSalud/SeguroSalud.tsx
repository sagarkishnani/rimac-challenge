import family from "@/assets/images/seguro-salud/family.jpg";
import Badge from "../../atoms/Badge/Badge";
import Container from "../../molecule/Container/Container";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";
import UserService from "../../../services/UserService/UserService";
import useUserStore from "../../../stores/UserStore/UserStore";
import AccessForm from "../../organisms/AccessForm/AccessForm";
import { FormikValues } from "formik";
import {
  GetUserResponse,
  User,
} from "../../../services/UserService/UserServiceInterface";
import { useNavigate } from "react-router-dom";
import "./SeguroSalud.scss";

const SeguroSalud = () => {
  const setIsLoading = useUserStore((state) => state.setIsLoading);
  const setUser = useUserStore((state) => state.setUser);

  const navigate = useNavigate();

  const getUser = async (): Promise<GetUserResponse | null> => {
    try {
      const userDataResult = await UserService.getUser();
      return userDataResult;
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      return null;
    }
  };

  const handleSubmit = async (values: FormikValues) => {
    setIsLoading(true);
    const userData = await getUser();

    if (userData) {
      const userInfo: User = {
        name: userData.name,
        lastName: userData.lastName,
        birthDay: userData.birthDay,
        phone: values.phone,
        documentNumber: values.documentNumber,
        documentType: values.documentType,
      };

      setIsLoading(false);
      setUser(userInfo);
      navigate("/planes");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <div className="container__left">
          <img src={family} alt="happy-family" />
        </div>
        <div className="container__right">
          <div className="pb__lg">
            <div className="pt__md">
              <div className="title-section">
                <div className="title-section__subtitle">
                  <Badge title="Seguro Salud Flexible" isGradientBadge={true} />
                  <h2 className="pt__md">Creado para ti y tu familia</h2>
                </div>
                <img src={family} alt="happy-family" />
              </div>
            </div>
          </div>
          <hr className="" />
          <div className="pt__md">
            <div>
              <h5>
                Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                nuestra asesoría. 100% online.
              </h5>
            </div>
            <div className="pt__md">
              <AccessForm onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default SeguroSalud;
