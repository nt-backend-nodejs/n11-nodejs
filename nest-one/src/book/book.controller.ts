import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { BookService } from "./book.service";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { TodoService } from "src/todo/todo.service";

@Controller("book")
export class BookController {
  constructor(private readonly bookService: BookService, private readonly todoServive: TodoService) { }

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get()
  findAll() {

    this.todoServive;
    return this.bookService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.bookService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(+id, updateBookDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.bookService.remove(+id);
  }
}
