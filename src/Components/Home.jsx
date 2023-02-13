import NavBar from "./Nav";

import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="main col-12">
        <div className="container1 col-6 rounded">
          <div className="body rounded border border-2">
            <div className="title  rounded sticky-top ">
              {" "}
              <h3 className="ps-3">Task</h3>
              <div class="input-group ps-3 pe-3 ">
                <input
                  type="text"
                  class="form-control "
                  placeholder="Add new task"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  Button
                </button>
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  udpated
                </button>
              </div>
            </div>

            <div className="list_data rounded p-2">
              {" "}
              <div className="col-10">
                <b> Goals3</b>{" "}
              </div>
              <div className="buttons col-1 ">
                {" "}
                <button
                  class="btn btn-outline-secondary btn"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon
                    icon={faEdit}
                    className=" deletIcon p-1"
                    onClick={Hello}
                  />{" "}
                </button>
              </div>
              <div className="buttons col-1 ">
                {" "}
                <button
                  class="btn btn-outline-secondary btn"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className=" deletIcon p-1"
                    onClick={Hello}
                  />{" "}
                </button>
              </div>
            </div>

            <div className="list_data rounded p-2">
              {" "}
              <div className="col-10">
                <b> Goals3</b>{" "}
              </div>
              <div className="buttons col-1 ">
                {" "}
                <button
                  class="btn btn-outline-secondary btn"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon
                    icon={faEdit}
                    className=" deletIcon p-1"
                    onClick={Hello}
                  />{" "}
                </button>
              </div>
              <div className="buttons col-1 ">
                {" "}
                <button
                  class="btn btn-outline-secondary btn"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className=" deletIcon p-1"
                    onClick={Hello}
                  />{" "}
                </button>
              </div>
            </div>

            <div className="list_data rounded p-2">
              {" "}
              <div className="col-10">
                <b> Goals3</b>{" "}
              </div>
              <div className="buttons col-1 ">
                {" "}
                <button
                  class="btn btn-outline-secondary btn"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon
                    icon={faEdit}
                    className=" deletIcon p-1"
                    onClick={Hello}
                  />{" "}
                </button>
              </div>
              <div className="buttons col-1 ">
                {" "}
                <button
                  class="btn btn-outline-secondary btn"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className=" deletIcon p-1"
                    onClick={Hello}
                  />{" "}
                </button>
              </div>
            </div>

            <div className="list_data rounded p-2">
              {" "}
              <div className="col-10">
                <b> Goals3</b>{" "}
              </div>
              <div className="buttons col-1 ">
                {" "}
                <button
                  class="btn btn-outline-secondary btn"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon
                    icon={faEdit}
                    className=" deletIcon p-1"
                    onClick={Hello}
                  />{" "}
                </button>
              </div>
              <div className="buttons col-1 ">
                {" "}
                <button
                  class="btn btn-outline-secondary btn"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className=" deletIcon p-1"
                    onClick={Hello}
                  />{" "}
                </button>
              </div>
            </div>

            <div className="list_data rounded p-2">
              {" "}
              <div className="col-10">
                <b> Goals3</b>{" "}
              </div>
              <div className="buttons col-1 ">
                {" "}
                <button
                  class="btn btn-outline-secondary btn"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon
                    icon={faEdit}
                    className=" deletIcon p-1"
                    onClick={Hello}
                  />{" "}
                </button>
              </div>
              <div className="buttons col-1 ">
                {" "}
                <button
                  class="btn btn-outline-secondary btn"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className=" deletIcon p-1"
                    onClick={Hello}
                  />{" "}
                </button>
              </div>
            </div>

            <div className="list_data rounded p-2">
              {" "}
              <div className="col-10">
                <b> Goals3</b>{" "}
              </div>
              <div className="buttons col-1 ">
                {" "}
                <button
                  class="btn btn-outline-secondary btn"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon
                    icon={faEdit}
                    className=" deletIcon p-1"
                    onClick={Hello}
                  />{" "}
                </button>
              </div>
              <div className="buttons col-1 ">
                {" "}
                <button
                  class="btn btn-outline-secondary btn"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className=" deletIcon p-1"
                    onClick={Hello}
                  />{" "}
                </button>
              </div>
            </div>

            <div className="list_data rounded p-2">
              {" "}
              <div className="col-10">
                <b> Goals3</b>{" "}
              </div>
              <div className="buttons col-1 ">
                {" "}
                <button
                  class="btn btn-outline-secondary btn"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon
                    icon={faEdit}
                    className=" deletIcon p-1"
                    onClick={Hello}
                  />{" "}
                </button>
              </div>
              <div className="buttons col-1 ">
                {" "}
                <button
                  class="btn btn-outline-secondary btn"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className=" deletIcon p-1"
                    onClick={Hello}
                  />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* List Of Task */}
        <div className="container1 rounded col-6">
          <div className="body rounded  border border-2 ">
            <div className="title  rounded sticky-top ">
              {" "}
              <h3 className="ps-3">List</h3>
              <div class="input-group ps-3 pe-3 ">
                <input
                  type="text"
                  class="form-control "
                  placeholder="Add new list"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  Add
                </button>
              </div>
            </div>
            {/* <div class="input-group ps-3 pe-3 ">
  <input type="text" class="form-control " placeholder="Add new list" aria-describedby="button-addon2"/>
  <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
</div>
           */}
            <div className="list_data rounded p-2">
              {" "}
              <div className="col-10">
                <b> Goals3</b>{" "}
              </div>
              <div className="buttons col-1 ">
                {" "}
                <button
                  class="btn btn-outline-secondary btn"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon
                    icon={faEdit}
                    className=" deletIcon p-1"
                    onClick={Hello}
                  />{" "}
                </button>
              </div>
              <div className="buttons col-1 ">
                {" "}
                <button
                  class="btn btn-outline-secondary btn"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className=" deletIcon p-1"
                    onClick={Hello}
                  />{" "}
                </button>
              </div>
            </div>

            <div className="list_data rounded p-2">
              {" "}
              <div className="col-10">
                <b> Goals3</b>{" "}
              </div>
              <div className="buttons col-1 ">
                {" "}
                <button
                  class="btn btn-outline-secondary btn"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon
                    icon={faEdit}
                    className=" deletIcon p-1"
                    onClick={Hello}
                  />{" "}
                </button>
              </div>
              <div className="buttons col-1 ">
                {" "}
                <button
                  class="btn btn-outline-secondary btn"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className=" deletIcon p-1"
                    onClick={Hello}
                  />{" "}
                </button>
              </div>
            </div>

            <div className="list_data rounded p-2">
              {" "}
              <div className="col-10">
                <b> Goals3</b>{" "}
              </div>
              <div className="buttons col-1 ">
                {" "}
                <button
                  class="btn btn-outline-secondary btn"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon
                    icon={faEdit}
                    className=" deletIcon p-1"
                    onClick={Hello}
                  />{" "}
                </button>
              </div>
              <div className="buttons col-1 ">
                {" "}
                <button
                  class="btn btn-outline-secondary btn"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className=" deletIcon p-1"
                    onClick={Hello}
                  />{" "}
                </button>
              </div>
            </div>

            <div className="list_data rounded p-2">
              {" "}
              <div className="col-10">
                <b> Goals3</b>{" "}
              </div>
              <div className="buttons col-1 ">
                {" "}
                <button
                  class="btn btn-outline-secondary btn"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon
                    icon={faEdit}
                    className=" deletIcon p-1"
                    onClick={Hello}
                  />{" "}
                </button>
              </div>
              <div className="buttons col-1 ">
                {" "}
                <button
                  class="btn btn-outline-secondary btn"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className=" deletIcon p-1"
                    onClick={Hello}
                  />{" "}
                </button>
              </div>
            </div>

            <div className="list_data rounded p-2">
              {" "}
              <div className="col-10">
                <b> Goals3</b>{" "}
              </div>
              <div className="buttons col-1 ">
                {" "}
                <button
                  class="btn btn-outline-secondary btn"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon
                    icon={faEdit}
                    className=" deletIcon p-1"
                    onClick={Hello}
                  />{" "}
                </button>
              </div>
              <div className="buttons col-1 ">
                {" "}
                <button
                  class="btn btn-outline-secondary btn"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className=" deletIcon p-1"
                    onClick={Hello}
                  />{" "}
                </button>
              </div>
            </div>

            <div className="list_data rounded p-2">
              {" "}
              <div className="col-10">
                <b> Goals3</b>{" "}
              </div>
              <div className="buttons col-1 ">
                {" "}
                <button
                  class="btn btn-outline-secondary btn"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon
                    icon={faEdit}
                    className=" deletIcon p-1"
                    onClick={Hello}
                  />{" "}
                </button>
              </div>
              <div className="buttons col-1 ">
                {" "}
                <button
                  class="btn btn-outline-secondary btn"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className=" deletIcon p-1"
                    onClick={Hello}
                  />{" "}
                </button>
              </div>
            </div>

            <div className="list_data rounded p-2">
              {" "}
              <div className="col-10">
                <b> Goals3</b>{" "}
              </div>
              <div className="buttons col-1 ">
                {" "}
                <button
                  class="btn btn-outline-secondary btn"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon
                    icon={faEdit}
                    className=" deletIcon p-1"
                    onClick={Hello}
                  />{" "}
                </button>
              </div>
              <div className="buttons col-1 ">
                {" "}
                <button
                  class="btn btn-outline-secondary btn"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className=" deletIcon p-1"
                    onClick={Hello}
                  />{" "}
                </button>
              </div>
            </div>

            <div className="list_data rounded p-2">
              {" "}
              <div className="col-10">
                <b> Goals3</b>{" "}
              </div>
              <div className="buttons col-1 ">
                {" "}
                <button
                  class="btn btn-outline-secondary btn"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon
                    icon={faEdit}
                    className=" deletIcon p-1"
                    onClick={Hello}
                  />{" "}
                </button>
              </div>
              <div className="buttons col-1 ">
                {" "}
                <button
                  class="btn btn-outline-secondary btn"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className=" deletIcon p-1"
                    onClick={Hello}
                  />{" "}
                </button>
              </div>
            </div>

            <div className="list_data rounded p-2">
              {" "}
              <div className="col-10">
                <b> Goals3</b>{" "}
              </div>
              <div className="buttons col-1 ">
                {" "}
                <button
                  class="btn btn-outline-secondary btn"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon
                    icon={faEdit}
                    className=" deletIcon p-1"
                    onClick={Hello}
                  />{" "}
                </button>
              </div>
              <div className="buttons col-1 ">
                {" "}
                <button
                  class="btn btn-outline-secondary btn"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className=" deletIcon p-1"
                    onClick={Hello}
                  />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Hello = () => {
  alert("Delete icon clicked");
};

export default Home;
