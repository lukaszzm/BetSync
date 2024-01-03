import { Skeleton } from "../skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../table";

interface FormSkeletonProps {
  columns: number;
  rows: number;
}

const FormRowSkeleton = ({ columns }: Pick<FormSkeletonProps, "columns">) => {
  return (
    <TableRow>
      {Array.from({ length: columns }, (_, i) => (
        <TableCell key={i}>
          <Skeleton className="w-24 h-4" />
        </TableCell>
      ))}
    </TableRow>
  );
};

const FormHeaderSkeleton = ({ columns }: Pick<FormSkeletonProps, "columns">) => {
  return (
    <TableHeader>
      <TableRow>
        {Array.from({ length: columns }, (_, i) => (
          <TableHead key={i}>
            <Skeleton className="w-24 h-4" />
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
};

export const FormSkeleton = ({ columns, rows }: FormSkeletonProps) => {
  return (
    <Table>
      <FormHeaderSkeleton columns={columns} />
      <TableBody>
        {Array.from({ length: rows }, (_, i) => (
          <FormRowSkeleton key={i} columns={columns} />
        ))}
      </TableBody>
    </Table>
  );
};
