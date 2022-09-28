import Image from "next/image";
import apu from "public/vuelvaprontos.png";
import styled from "styled-components";
import { Subtitle } from "ui/texts";
import style from "./logoutPage.module.css";

const SubtitleWht = styled(Subtitle)`
  color: var(--Wht);
`;

const imgStyle = {
  borderRadius: "3px",
};

export function LogoutPage() {
  return (
    <section className={style.container}>
      <SubtitleWht>Gracias por usar Compralo</SubtitleWht>
      <div className={style.container__img}>
        <Image
          src={apu}
          alt="Imagen de APU diciendo vuelva prontos"
          style={imgStyle}
          width={400}
          height={400}
          layout="intrinsic"
        />
      </div>
    </section>
  );
}
