import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import NewsDataService from "./services/news.services";
import { useNavigate } from "react-router";
import { useUserAuth } from "./UserAuthContext";
import imglight from "../streetlight.png";
import imgdark from "../streetdark.png";
import logo from "../heronbendlogo.png";


const AddNews = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState("");
  const [link, setLink] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (title === "" || content === "" || link === "") {
      setMessage({ error: true, msg: "All fields are mandatory" });
    }
    const newNews = {
      title,
      content,
      img,
      link,
    };
    console.log(newNews);

    try {
      await NewsDataService.addNews(newNews);
      setMessage({ error: false, msg: "News Added" });
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setTitle("");
    setContent("");
    setImg("");
    setLink("");
  };

  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
          <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand d-lg-none" href="#">
            <img src={logo}></img>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <a class="nav-item emailitem">
              <a class="nav-link text-white" href="#">
                <b>HOA ADMIN PAGE</b>
              </a>
            </a>
            <ul class="navbar-nav mx-auto">
              {/* <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>*/}
              <a class="navbar-brand d-lg-block d-none navlogo ">
                <img src={logo}></img>
              </a>
              {/* <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown link
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul> */}
              {/* </li> */}
            </ul>
            <a class="nav-item">
            <button
        class=" btn btn-lg btn-primary dashboard-button2"
        type="submit"
        onClick={handleLogout}
      >
        Sign out
      </button>
            </a>
          </div>
        </div>
      </nav>
      <div class="wrapcontainer">
        <div class="container container1">
          <header class="d-flex justify-content-center py-3 ">
            <ul class="nav nav-pills">
              <li class="nav-item ">
                <a href="/" class="nav-link text-black">
                  <b>Home</b>
                </a>
              </li>
              <li class="nav-item">
                <a href="/dashboard" class="nav-link text-black">
                  <b>Announcements</b>
                </a>
              </li>
              <li class="nav-item">
                <a href="/commitee" class="nav-link text-black">
                  <b>Committee</b>
                </a>
              </li>
              <li class="nav-item">
                <a href="/Info" class="nav-link text-black">
                  <b>Info Center</b>
                </a>
              </li>
              {/* <li class="nav-item">
                <a href="/chat" class="nav-link text-black">
                  <b>Chat</b>
                </a>
              </li> */}
              <li class="nav-item">
                <a href="/Contact" class="nav-link text-black">
                  <b>Contact Center</b>
                </a>
              </li>
            </ul>
          </header>
        </div>
      </div>
      <div>
        <div class="page-container">
          <div class="copy-left copy">
            <h1>Community Announcements</h1>
            <div class="inner-left2" contentEditable="true">
              <p>
                For the latest Walnut Country news, scroll through the following
                articles listed in reverse chronological order (newest to
                oldest). If you would like a weekly email digest of stories,
                join our eSignal mailing list using the form at the far bottom
                right of this page.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <p>
                  {" "}
                  <div class="form-floating">
                    <input
                      type="text"
                      class="form-control dashboard-title"
                      id="floatingInput"
                      placeholder="name@example.com"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <label for="floatingInput">Title</label>
                  </div>
                </p>
                <p>
                  {" "}
                  <div class="form-floating">
                    <input
                      type="text"
                      class="form-control dashboard-text"
                      id="floatingPassword"
                      placeholder="Password"
                      onChange={(e) => setContent(e.target.value)}
                    />
                    <label for="floatingPassword">Text</label>
                  </div>
                </p>
                <p>
                  {" "}
                  <div class="form-floating">
                    <input
                      type="text"
                      class="form-control dashboard-img"
                      id="floatingPassword"
                      placeholder="Password"
                      onChange={(e) => setImg(e.target.value)}
                    />
                    <label for="floatingPassword">Img</label>
                  </div>
                </p>
                <p>
                  {" "}
                  <div class="form-floating">
                    <input
                      type="text"
                      class="form-control dashboard-link"
                      id="floatingPassword"
                      placeholder="Password"
                      onChange={(e) => setLink(e.target.value)}
                    />
                    <label for="floatingPassword">Link</label>
                  </div>
                </p>
                <button
                  class="w-75 btn btn-lg btn-primary dashboard-button"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div class="copy-right copy">
            <div class="right-menu">
              <h2>RESIDENT MENU</h2>
              <li>Pay HOA Assessments</li>
              <li>Clubhouse Reservations</li>
              <li>Agendas & Minutes</li>
              <li>Governing Documents</li>
              <li>USTA Teams & Schedule</li>
            </div>
            <div class="right-menu2">
              <h2>RECENT NEWS</h2>
              <li>RSVP for the CHOA Winter</li>
              <li>Concord Turkey Trot 5k Walk/Run</li>
              <li>Main Pool Heating Schedule</li>
            </div>
          </div>
        </div>
      </div>


      {/* <div className="p-4 box">
      {message?.mg && (
        <Alert 
          variant={message?.error ? "danger" : "success"}
          dismissible
          onClose={() => setMessage("")}
        >
          {""}
          {message?.msg} 
        </Alert>
      )}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formNewsTitle">
            <InputGroup>
              <InputGroup.Text id="formNewsTitle">B</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="News Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formNewsContent">
            <InputGroup>
              <InputGroup.Text id="formNewsContent">A</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="News Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formNewsLink">
            <InputGroup>
              <InputGroup.Text id="formNewsLink">A</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="News Link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <div className="d-grid">
            <Button class="w-100" variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div> */}
    </>
  );
};

export default AddNews;
 