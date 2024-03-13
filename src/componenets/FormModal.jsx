import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import { Form } from "react-bootstrap";
import { addTask, editTask } from "../redux/slices/crudSlice";
import { useDispatch } from "react-redux";

const FormModal = ({ isOpen, close, editItem }) => {
  const dispatch = useDispatch();
  //gözüküp gözükmeyeceğini burda alıp aşağıda veriyoruz çarpıya basınca kapanma işlemide
  const handleSubmit = (e) => {
    //form gönderilince
    e.preventDefault(); //sayfanın yenilenmesini engeller

    //1- formData classına prop olarak formumuzu göndeririz
    //new ile oluşturduğumuz örnek bizim bazı fonksiyonların kullanma
    const formData = new FormData(e.target);

    //2- formdaki imputların verilerini alıp bir obje oluşturma
    const task = Object.fromEntries(formData.entries());

    //3teki kod güncelleme yapılıncada yeni görev olarak ekliyor bu yüzden koşul bildir
    if(editItem){
      dispatch(editTask({...task, id: editItem.id}))
    }else{
      //3- yeni taski stora ekle
      dispatch(addTask(task));
    }

    //4-Modalı kapat
    close();
  };

  return (
    <Modal onHide={close} show={isOpen} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{editItem ? "Update Task" : "Add New Task"}</Modal.Title>
      </Modal.Header>
      {/* İçerik */}
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="my-3">
            <Form.Label> Task Description</Form.Label>
            <Form.Control
              defaultValue={editItem?.title} //value kalırsa edite basılınca tuşlara bastırmaz düzenleme yapılamaz bu yüzden "defaultValue" kullanırız
              name="title"
              placeholder="Add to task"
              required
            />
          </Form.Group>

          <Form.Group className="my-3">
            <Form.Label> Name</Form.Label>
            <Form.Control
            defaultValue={editItem?.author}
              name="author"
              placeholder="Enter your name"
              required
            />
          </Form.Group>

          <Form.Group className="my-3">
            <Form.Label> Assigned</Form.Label>
            <Form.Control
             defaultValue={editItem?.assigned_to}
              name="assigned_to"
              placeholder="Enter who you assigned"
              required
            />
          </Form.Group>

          <Form.Group className="my-3">
            <Form.Label> Deadline</Form.Label>
            <Form.Control 
             defaultValue={editItem?.end_date}
            name="end_date" 
            type="date" 
            required />
          </Form.Group>

          {/* butonlar */}
          <Modal.Footer>
            <Button type="button" onClick={close} variant="secondary">
              Close
            </Button>
            <Button type="submit">Save</Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
