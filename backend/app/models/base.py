from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class BaseModel(Base):
    __abstract__ = True

    # @declared_attr
    # def __tablename__(cls):
    #     return cls.__name__.lower()

    # id = Column(Integer, primary_key=True, index=True)
    # created_at = Column(DateTime, server_default=func.now())
    # updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now())
