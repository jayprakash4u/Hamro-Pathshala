"use client";

import { useState } from "react";

import {
  Badge,
  Button,
  Checkbox,
  Dialog,
  Drawer,
  Dropdown,
  DropdownItem,
  DropdownLabel,
  DropdownSeparator,
  EmptyState,
  Field,
  Input,
  Loader,
  Pagination,
  Radio,
  Select,
  Skeleton,
  SkeletonCard,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  Textarea,
  Tooltip,
} from "@/components/ui";

export default function UiCheck() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <main className="flex flex-col gap-12 px-gutter py-section">
      <section className="grid gap-6">
        <h1 className="text-heading-1 font-semibold text-heading">Core UI</h1>

        <div className="grid gap-6 md:grid-cols-3">
          <Field label="Full name" hint="As per school record">
            <Input placeholder="Sita Sharma" />
          </Field>
          <Field label="Grade" error="Select a grade">
            <Input invalid placeholder="Grade 8" />
          </Field>
          <Field label="Section">
            <Select
              placeholder="Choose section"
              options={[
                { value: "a", label: "Section A" },
                { value: "b", label: "Section B" },
              ]}
            />
          </Field>
          <Field label="Address">
            <Textarea placeholder="Kathmandu" />
          </Field>
          <Field label="Settings">
            <div className="flex flex-col gap-3">
              <Checkbox label="Send SMS" defaultChecked />
              <Checkbox label="Disabled" disabled />
              <Radio name="shift" label="Morning" defaultChecked />
              <Radio name="shift" label="Evening" />
            </div>
          </Field>
          <Field label="Loading">
            <Loader label="Fetching students" />
          </Field>
        </div>
      </section>

      <section className="flex flex-wrap items-center gap-3">
        <Button onClick={() => setDialogOpen(true)}>Open dialog</Button>
        <Button variant="outline" onClick={() => setDrawerOpen(true)}>
          Open drawer
        </Button>
        <Dropdown
          align="start"
          label="Open menu"
          trigger={<Badge variant="brand">Menu</Badge>}
        >
          <DropdownLabel>Actions</DropdownLabel>
          <DropdownItem>Edit profile</DropdownItem>
          <DropdownItem>Export CSV</DropdownItem>
          <DropdownSeparator />
          <DropdownItem destructive>Delete</DropdownItem>
        </Dropdown>
        <Tooltip content="Only admins can approve fees">
          <Badge variant="outline">Hover me</Badge>
        </Tooltip>
      </section>

      <Tabs
        items={[
          {
            value: "overview",
            label: "Overview",
            content: <p className="text-body-md text-copy">Overview panel</p>,
          },
          {
            value: "attendance",
            label: "Attendance",
            content: <p className="text-body-md text-copy">Attendance panel</p>,
          },
        ]}
      />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Student</TableHead>
            <TableHead>Grade</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-heading">Sita Sharma</TableCell>
            <TableCell>Grade 8</TableCell>
            <TableCell>
              <Badge variant="accent" dot>
                Active
              </Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Pagination currentPage={3} totalPages={9} />

      <div className="grid gap-6 md:grid-cols-3">
        <SkeletonCard />
        <Skeleton variant="rect" />
        <EmptyState
          title="No students yet"
          description="Import your student list or add the first student manually."
          action={<Button size="sm">Add student</Button>}
        />
      </div>

      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title="Request a demo"
        description="Our team replies within one business day."
        footer={
          <>
            <Button variant="ghost" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setDialogOpen(false)}>Send request</Button>
          </>
        }
      >
        <div className="flex flex-col gap-4">
          <Skeleton variant="text" lines={3} />
        </div>
      </Dialog>

      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        title="Student profile"
        side="right"
        footer={<Button onClick={() => setDrawerOpen(false)}>Done</Button>}
      >
        <Skeleton variant="text" lines={6} />
      </Drawer>
    </main>
  );
}