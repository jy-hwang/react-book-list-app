import styled from "@emotion/styled/macro";
import React from "react";

const Input = styled.input`
  outline: 0;
  padding: 0.6rem 1rem;
  border: 1px solid rgba(34, 36, 38, 0.5);
  border-radius: 3px;
  min-width: 280px;
  &:focus,
  &:active {
    border-color: #85b7d9;
  }
  @media (max-width: 778px;) {
    margin-top: 10px;
  }
`;

const Button = styled.button`
  background-color: #fcfcfd;
  color: #36395a;
  border: 1px solid rgba(34, 36, 38, 0.5);
  padding: 0.6rem 1.5rem;
  margin-left: 15px;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    transform: translateY(-2px);
  }
`;

const Form = styled.form``;

const BookSearchForm = ({
  onSubmit,
  searchTerm,
  onChange,
  error
}) => {

  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="search"
        placeholder="책이나 저자로 검색해주세요"
        required
        value={searchTerm}
        onChange={onChange}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default BookSearchForm;
