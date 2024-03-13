import { useState } from "react";
import { Button, ButtonGroup, Modal, Stack, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormModal from "../componenets/FormModal";
import { deleteTask } from "../redux/slices/crudSlice";

const CrudPage = () => {
  //tabloyu temaya bağlamak için abone olmak gerek
  const counterState = useSelector((store) => store.counterSlice);
  //slice abone ol
  const crudState = useSelector((store) => store.crudSlice);
  //silme butonuna basıldığında silme işlemi gerçekleşmesi için
  const dispatch = useDispatch();
  //modal açılacak mı stati
  const [isOpen, setIsOpen] = useState(false);
  //güncellenecek elemanın stati
  const [editItem, setEditItem] = useState(null);

  return (
    <div className="px-3">
      <Stack className="my-4">
        <Button onClick={() => setIsOpen(true)}> Add New Task...</Button>
      </Stack>

      {/* form modalı ekrana bas */}
      <FormModal
        isOpen={isOpen}
        editItem={editItem}
        close={() => {
          setIsOpen(false);
          setEditItem(null);
        }}
      />

      <Table
        striped
        bordered
        hover
        responsive
        variant={counterState.is_dark_theme ? "light" : "dark"}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th> Author</th>
            <th>Assigned To</th>
            <th>Date</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {crudState.task.map((task, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{task.title}</td>
              <td>{task.author}</td>
              <td>{task.assigned_to}</td>
              <td>{task.end_date}</td>
              <td>
                <ButtonGroup size="sm">
                  <Button
                    onClick={() => dispatch(deleteTask(task.id))}
                    variant="danger"
                  >
                    Delete
                  </Button>
                  <Button
                    onClick={() => {
                      setEditItem(task);
                      setIsOpen(true);
                    }}
                  >
                    Edit
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CrudPage;
