import React, { useContext, useEffect, useState } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";
import FileBase from "react-file-base64";
import Form from "react-bootstrap/Form";
import questionService from "../services/questionService";
import { UserContext } from "../contexts/UserContext";

export const AskQuestionComponent = () => {
  const { user } = useContext(UserContext);

  const [writtenQuestion, setWrittenQuestion] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const userId = user?.id;

  console.log(userId);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const question = {
        writtenQuestion,
        selectedFile,
        selectedSubject,
        userId,
      };

      await questionService.createQuestion(question);

      console.log(question);

      setWrittenQuestion("");
      setSelectedFile("");
      setSelectedSubject("");

      // Soru ekledikten sonra tüm soruları getir
      await questionService.getQuestions();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div
        className="border rounded-75 border-dark border-1 p-5 "
        style={{
          backgroundColor: "#BFD1CE",
          backgroundImage:
            "url('https://abakcus.com/wp-content/uploads/2023/02/How-to-Do-Well-in-Calculus.png.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <Form.Select
              label="Floating label select example"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              <option value="">
                Which subject does the question belong to
              </option>
              <option value="Arithmetic operations">
                Arithmetic operations
              </option>
              <option value="Place value system">Place value system</option>
              <option value="Measurement">Measurement</option>
              <option value="Basic algebra">Basic algebra</option>
              <option value="Basic statistics">Basic statistics</option>
            </Form.Select>
          </div>
          <div>
            <textarea
              aria-label="Large"
              style={{ width: "1200px", height: "150px" }}
              value={writtenQuestion}
              onChange={(e) => setWrittenQuestion(e.target.value)}
              placeholder="The explanation of my question is as follows:"
            />
          </div>
          <div>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setSelectedFile(base64)}
            />
          </div>
          <button className="mt-1" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default withAuthenticationRequired(AskQuestionComponent, {
  onRedirecting: () => <Loading />,
});
