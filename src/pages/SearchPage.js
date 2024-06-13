import styled from "@emotion/styled/macro";
import React, { useState } from "react";
import BookSearchForm from "../components/BookSearchForm";
import axios from "axios";
import Loader from "../components/Loader";
import BooksList from "../components/BooksList";
import {
  Container,
  Header,
  HeaderContainer,
  LogoText,
} from "../components/Shared";
import InputTest from "../components/InputTest";

const HeaderSearchForm = styled.div`
  margin-left: auto;
`;

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [books, setBooks] = useState({});

  const [loading, setLoading] = useState(false);

  const API_BASE_URL = `https://www.googleapis.com/books`;

  const fetchBooks = async () => {
    setLoading(true);

    try {
      const result = await axios.get(
        `${API_BASE_URL}/v1/volumes?q=${searchTerm}`
      );
      setBooks(result.data);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  const handleCahnge = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchBooks();
  };

  return (
    <>
      <Header>
        <HeaderContainer>
          <LogoText>Book List</LogoText>
          <HeaderSearchForm>
            <BookSearchForm
              onSubmit={handleSubmit}
              onChange={handleCahnge}
              searchTerm={searchTerm}
            />
          </HeaderSearchForm>
        </HeaderContainer>
      </Header>
      <Container>
        {/* <Loader loading={loading}>
          "<strong>{searchTerm}</strong>" 책을 찾고 있습니다.
        </Loader>
        <BooksList books={books} /> */}
        <InputTest />
      </Container>
    </>
  );
};

export default SearchPage;
