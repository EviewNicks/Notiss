import React from "react";
import "../../../style/noteCard.css";
import { ButtonIconAction } from "../button";
import { AddArchiveIcon, CancelIcon, EditIcon, UnarchiveIcon } from "../Icon";

const NoteCard = ({
  id,
  title,
  textDescription,
  dateText,
  archived,
  color = "#FFFFFF",
  onDelete,
  onArchive,
  onUnarchive,
  onEdit
}) =>
{
  return (
    <article className="note flex flex-col w-[274px] h-[344px] p-2.5 px-2 rounded-3xl border border-blackLayer-3 bg-blackLayer-1 shadow-note relative">
      {/* Note Header */}
      <header className="note-header absolute right-2 flex justify-end items-center gap-2 z-30">
        <div className="flex p-[4px] justify-end items-center gap-[4px] rounded-full bg-blackLayer-4 ">
          <ButtonIconAction
            icon={<CancelIcon />}
            size="tiny"
            sizeIcon={26}
            onClick={() => onDelete(id)}
          />
        </div>
      </header>

      {/* Note Body */}
      <section className="note-body flex w-64 h-96 p-2 flex-col justify-between items-center relative rounded-3xl overflow-visible"
        style={{ "--note-bg-color": color }}
      >
        <div className="deks flex flex-col justify-between items-end flex-1 w-full z-10">
          <div className="note-content flex flex-col w-[238px] h-[266px] gap-1">
            <div className="note-title flex h-[73px] max-w-[178px] p-1 gap-2 items-start flex-shrink-0">
              <h3 className="title-text flex-1 text-black text-sm font-normal font-poppins leading-normal">
                {title}
              </h3>
            </div>
            <div className="note-text flex h-[150px] max-h-[168px] p-1 items-start flex-shrink-0 w-full">
              <p className="text-deks flex-1 text-black text-xs font-light font-poppins leading-normal">
                {textDescription}
              </p>
            </div>
          </div>
          <div className="note-date flex justify-end items-center flex-1 w-full mr-4">
            <span className="date-text text-center text-gray-800 text-xs font-normal">
              {dateText}
            </span>
          </div>
        </div>
      </section>

      {/* Note Action */}
      <div className="flex absolute bottom-2 p-[4px] justify-end items-center gap-[4px] rounded-full bg-[#212530] z-40 ">
        <ButtonIconAction
          icon={<EditIcon />}
          size="tiny"
          sizeIcon={24}
          onClick={() => onEdit(id)}
        />

        {archived ? (
          <ButtonIconAction
            icon={<UnarchiveIcon />}
            size="tiny"
            sizeIcon={24}
            onClick={() => onUnarchive(id)}
          />
        ) : (
          <ButtonIconAction
            icon={<AddArchiveIcon />}
            size="tiny"
            sizeIcon={24}
            onClick={() => onArchive(id)}
          />
        )}
      </div>
    </article >
  );
};

export default NoteCard;
