import { Container, Row, Col, Button } from 'react-bootstrap';
import { Navbar } from '../../components/Navbar';
import { Cart } from '../../components/Cart';
import { PaintingCard } from '../../components/PaintingCard';
import { FC } from 'react';
import { Breadcrumbs } from '../../components/BreadCrumbs';
import { usePaintingsPage } from './usePaintingsPage';

export const PaintingsPage: FC = () => {
  const {
    paintingList,
    expertiseId,
    itemsInCart,
    searchTitle,
    handleSearchPaintingsClick,
    handleSearchTitleChange,
  } = usePaintingsPage();

  return (
    <>
      <Navbar />
      <Container className="pb-4 d-flex flex-column mx-auto" style={{ maxWidth: '1200px' }}>
        <Container className="d-flex flex-row justify-content-between mb-5 mt-5">
          <Breadcrumbs endItem="Каталог" />
          <Cart paintingExpertiseId={expertiseId ? expertiseId : 0} itemsInCart={itemsInCart} />
        </Container>
        <div className="d-flex flex-row gap-3 mb-4 col-8 align-self-center">
          <div className="flex-grow-1">
            <input
              type="text"
              className="input form-control"
              onChange={handleSearchTitleChange}
              placeholder="Поиск картины"
              aria-label="Поиск"
              value={searchTitle}
              style={{ width: '100%' }}
            />
          </div>
          <div>
            <Button
              onClick={handleSearchPaintingsClick}
              className="btn btn-secondary ml-3 mr-3"
            >
              Искать
            </Button>
          </div>
        </div>
        <Row xs={1} sm={1} lg={3} className="g-4 justify-content-start">
          {paintingList.map((paintingDetail) => (
            <Col key={paintingDetail.pk} className="d-flex align-items-stretch">
              <PaintingCard key={paintingDetail.pk} {...paintingDetail} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default PaintingsPage;
