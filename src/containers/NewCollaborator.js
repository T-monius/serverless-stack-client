import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { API } from "aws-amplify";
import { onError } from "../libs/errorLib";
import Form from "react-bootstrap/Form";
import LoaderButton from "../components/LoaderButton";

export default function NewCollaborator() {
  const history = useHistory();
  const [collaboratorInput, setCollaboratorInput] = useState("");
  const [confirmationInput, setConfirmationInput] = useState("");
  const [collaborationId, setCollaborationId] = useState("");

  function validateAddCollaboratorForm() {
    return collaboratorInput.length > 0;
  }

  function createCollaborator(collaboratorId) {
    return API.post("notes", "/collaborators", {
      body: {
       collaboratorId,
      },
    });
  }

  async function handleNewCollaboratorSubmit(event) {
    event.preventDefault();

    try {
      await createCollaborator(collaboratorInput);
      history.push("/");
    } catch (e) {
      onError(e);
    }
  }

  function validateGetIdForm() {
    return /yes/i.test(confirmationInput);
  }

  function getCollaborationId() {
    return API.get("notes", "/collaborators", {
      body: "",
    });
  }

  async function handleConfirmationSubmit(event) {
    event.preventDefault();
    let retrievedId;

    try {
      retrievedId = await getCollaborationId();
    } catch (e) {
      onError(e);
    }

    setCollaborationId(retrievedId)
  }

  return (
    <div>
      <h2>
        Real-Time Collaboration
      </h2>
      <p>
        Collaboration in this application allows for users to view, update, and delete
        not only notes that they create on their own account but notes created by
        collaborators in the collaborator's account as well.
      </p>
      <p>
        All of a user's notes appear on the home page, and when a collaborator is added,
        your collaborators notes will appear on your home page amongst your own notes.
      </p>
      <h3>
        What's the deal with Real-Time?
      </h3>
      <p>
        Real-Time collaboration means that if you are on the home page, and one of your
        collaborators adds or deletes a note, you'll see that note appear or disappear
        <strong>without</strong> having to reload your page. The change will happen
        <strong>right before your very eyes!</strong>
      </p>
      <div>
        <h3>
          Add a collaborator
        </h3>
        <p>
          If you'd like to add a collaborator, request from your collaborator their
          'collaborator id'. Once your collaborator has provided the 'collaborator id',
          Input it in the input box below (under this same subheading, not the next
          subheading).
        </p>
        <p>
          If someone requests a 'collaborator id' from you, or you'd like to
          know how your collaborator get's theirs, read the following section.
        </p>
        <Form onSubmit={handleNewCollaboratorSubmit}>
          <Form.Group controlId="content">
            <Form.Control
              type="input"
              value={collaboratorInput}
              onChange={(e) => setCollaboratorInput(e.target.value)}
            />
          </Form.Group>
          <LoaderButton
            block
            size="lg"
            type="submit"
            isLoading={false}
            disabled={!validateAddCollaboratorForm()}
          >
            Save
          </LoaderButton>
        </Form>
      </div>
      <div>
        <h3>
          Become a Collaborator
        </h3>
        <p>
        </p>
        <div>
          {collaborationId ? (
              <p>{collaborationId}</p>
            ) :
              (<Form onSubmit={handleConfirmationSubmit}>
                <Form.Group controlId="content">
                  <Form.Control
                    type="input"
                    value={confirmationInput}
                    onChange={(e) => setConfirmationInput(e.target.value)}
                  />
                </Form.Group>
                <LoaderButton
                  block
                  size="lg"
                  type="submit"
                  isLoading={false}
                  disabled={!validateGetIdForm()}
                >
                  Save
                </LoaderButton>
              </Form>)}
        </div>
      <div>
    </div>
  );
}