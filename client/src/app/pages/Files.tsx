import { Button } from "@/components/ui/button";
import { HiMiniDocumentArrowUp, HiMiniFolder } from "react-icons/hi2";
import { Input } from "@/components/ui/input"
import { IoSearchSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Files = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-12">
        <h1 className="font-semibold text-2xl">Manage Files</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
              Add New
              <FaPlus />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="mt-2 w-56">

            <DropdownMenuGroup>
              <DropdownMenuItem>
                <DropdownMenuShortcut>
                  <HiMiniDocumentArrowUp />
                </DropdownMenuShortcut>
                New File
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <DropdownMenuShortcut>
                  <HiMiniFolder />
                </DropdownMenuShortcut>
                Upload Folder
              </DropdownMenuItem>
            </DropdownMenuGroup>

          </DropdownMenuContent>

        </DropdownMenu>
      </div>

      <div className="flex items-center justify-between *: ">
        <div className="w-[70%]">
          <div className="flex items-center gap-3">

            <div className="flex items-center px-2.5 py-1 bg-accent border rounded-lg w-2/6 max-w-sm">
              <IoSearchSharp className="w-5 h-4" />
              <Input type="search" placeholder="Search filter" className="border-0 w-full" />
            </div>

            <div className="">
              <Select>
                <SelectTrigger className="w-[160px] py-5">
                  <SelectValue placeholder="Filter By: Type" />
                </SelectTrigger>

                <SelectContent className="mt-1">
                  <SelectItem value="all">All</SelectItem>
                  <DropdownMenuSeparator />
                  <SelectItem value="folders">Folders</SelectItem>
                  <SelectItem value="image">Image</SelectItem>
                  <SelectItem value="video">Video</SelectItem>
                  <SelectItem value="audio">Audio</SelectItem>
                  <SelectItem value="doc">Doc</SelectItem>
                  <SelectItem value="docx">Docx</SelectItem>
                  <SelectItem value="pdf">Pdf</SelectItem>
                  <SelectItem value="zip">Zip</SelectItem>
                  <SelectItem value="text">Text</SelectItem>
                  <SelectItem value="xlsx">Xlsx</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="">
              <Button className="p-4">
                <FaFilter className="" />
                Filter
              </Button>
            </div>
          </div>
        </div>

        <div className="w-[20%] col-2">
          <Button className="w-full">
            <IoSearchSharp className="w-5 h-4" />
            Search
          </Button>
        </div>

      </div>

    </div>
  );
};

export default Files;