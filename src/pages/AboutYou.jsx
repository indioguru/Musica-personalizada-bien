import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AboutYou = ({ search }) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [valueDropdown, setValueDropdown] = useState(
    "Selecciona tu parentesco"
  );
  const navigate = useNavigate();

  const initialValues = { name: "", lastName: "", email: "", phone: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = () => {
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (
      Object.keys(formErrors).length === 0 &&
      isSubmit &&
      valueDropdown !== "Selecciona tu parentesco"
    ) {
      navigate("/descarga");
    } else {
      if (isSubmit) {
        const animButton = document.querySelector(".button_one");
        animButton.classList.add("anim_button");
        setTimeout(() => {
          animButton.classList.remove("anim_button");
        }, 1000);
      }
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Tu nombre es requerido";
    }
    if (!values.lastName) {
      errors.lastName = "Tu apellido es requerido";
    }
    if (!values.email) {
      errors.email = "Tu email es requerido";
    } else if (!regex.test(values.email)) {
      errors.email = "Formato invalido";
    }
    if (!values.phone) {
      errors.phone = "Tu teléfono es requerido";
    }

    return errors;
  };

  return (
    <div className="aboutYou">
      <div className="aboutYou_container ">
        <div className="containerAll">
          <div className="content_steps">
            <div className="content_circles">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <p>PASO 2</p>
          </div>
          <h1>Cuéntanos un poco sobre ti</h1>
          <div className="content_forms">
            <div className="contetn_flex_one">
              <div className="input">
                <label htmlFor="name">Tu nombre </label>
                <input
                  onFocus={() => {
                    document
                      .querySelector(".input")
                      .classList.add("anim_input");
                  }}
                  onBlur={() => {
                    document
                      .querySelector(".input")
                      .classList.remove("anim_input");
                  }}
                  type="text"
                  id="name"
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                />
                {formErrors.name != null ? (
                  <div className="alert">
                    <img src="/assets/error.png" alt="" />
                    <p> {formErrors.name}</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="input i2">
                <label htmlFor="apellido">Tu apellido</label>
                <input
                  onFocus={() => {
                    document.querySelector(".i2").classList.add("anim_input");
                  }}
                  onBlur={() => {
                    document
                      .querySelector(".i2")
                      .classList.remove("anim_input");
                  }}
                  type="text"
                  id="apellido"
                  name="lastName"
                  value={formValues.lastName}
                  onChange={handleChange}
                />
                {formErrors.lastName != null ? (
                  <div className="alert">
                    <img src="/assets/error.png" alt="" />
                    <p> {formErrors.lastName}</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="input i3">
                <label htmlFor="email">Tu email</label>
                <input
                  onFocus={() => {
                    document.querySelector(".i3").classList.add("anim_input");
                  }}
                  onBlur={() => {
                    document
                      .querySelector(".i3")
                      .classList.remove("anim_input");
                  }}
                  type="email"
                  id="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
                {formErrors.email != null ? (
                  <div className="alert">
                    <img src="/assets/error.png" alt="" />
                    <p> {formErrors.email}</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="content_flex_two">
              <div className="input i4">
                <label htmlFor="phone">Tu teléfono móvil</label>
                <input
                  onFocus={() => {
                    document.querySelector(".i4").classList.add("anim_input");
                  }}
                  onBlur={() => {
                    document
                      .querySelector(".i4")
                      .classList.remove("anim_input");
                  }}
                  type="text"
                  id="phone"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleChange}
                />
                {formErrors.phone != null ? (
                  <div className="alert">
                    <img src="/assets/error.png" alt="" />
                    <p> {formErrors.phone}</p>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div
                className="content_dropdown"
                onClick={() => setDropdownActive(!dropdownActive)}
              >
                <p className="label">
                  ¿Cuál es tu parentesco con <span>{search}</span>?
                </p>
                <div className={`${!dropdownActive ? "img" : "img2"}`}>
                  <img src="/assets/abajo.png" alt="" />
                </div>
                <p className="info">{valueDropdown}</p>

                {valueDropdown === "Selecciona tu parentesco" && isSubmit ? (
                  <div className="alert">
                    <img src="/assets/error.png" alt="" />
                    <p>Tu parentesco es requerido</p>
                  </div>
                ) : (
                  ""
                )}

                <div
                  className={`${
                    dropdownActive
                      ? "content_info_dropdown"
                      : "content_info_dropdown_close"
                  }`}
                >
                  <p
                    onClick={() => {
                      setDropdownActive(!dropdownActive);
                      setValueDropdown("Mamá");
                    }}
                  >
                    Mamá
                  </p>
                  <p
                    onClick={() => {
                      setDropdownActive(!dropdownActive);
                      setValueDropdown("Papá");
                    }}
                  >
                    Papá
                  </p>
                  <p
                    onClick={() => {
                      setDropdownActive(!dropdownActive);
                      setValueDropdown("Hermano");
                    }}
                  >
                    Hermano
                  </p>
                  <p
                    onClick={() => {
                      setDropdownActive(!dropdownActive);
                      setValueDropdown("Hermana");
                    }}
                  >
                    Hermana
                  </p>
                  <p
                    onClick={() => {
                      setDropdownActive(!dropdownActive);
                      setValueDropdown("Amigo");
                    }}
                  >
                    Amigo
                  </p>
                  <p
                    onClick={() => {
                      setDropdownActive(!dropdownActive);
                      setValueDropdown("Amiga");
                    }}
                  >
                    Amiga
                  </p>
                  <p
                    onClick={() => {
                      setDropdownActive(!dropdownActive);
                      setValueDropdown("Otro");
                    }}
                  >
                    Otro
                  </p>
                </div>
              </div>

              <div className="button_one">
                <button onClick={() => handleSubmit()}>Enviar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutYou;
