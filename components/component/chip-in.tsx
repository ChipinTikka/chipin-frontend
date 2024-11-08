
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function ChipIn() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b bg-black px-4 py-3 shadow-sm sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="#" className="flex items-center gap-2 font-semibold text-white" prefetch={false}>
            <WalletIcon className="h-6 w-6" />
            <span>Chip In</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-white">
              <BellIcon className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button size="sm" className="rounded-md">
              Add Expense
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <img
                    src="/placeholder.svg"
                    alt="User Avatar"
                    width={32}
                    height={32}
                    className="rounded-full"
                    style={{ aspectRatio: "32/32", objectFit: "cover" }}
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="flex-1 px-4 py-6 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Expenses</p>
                      <p className="text-2xl font-semibold">INR 12346</p>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Pending Transactions</p>
                      <p className="text-2xl font-semibold">INR 4568</p>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Settled Transactions</p>
                      <p className="text-2xl font-semibold">INR 7891</p>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Split Bill</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="bill-image">Upload Bill</Label>
                    <Input id="bill-image" type="file" accept="image/*" placeholder="Upload bill image" />
                  </div>
                  <div>
                    <Label htmlFor="split-with">Split with</Label>
                    <Select>
                      <SelectTrigger id="split-with">
                        <SelectValue placeholder="Select friends" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="friend1">Nischay</SelectItem>
                        <SelectItem value="friend2">Spandan</SelectItem>
                        <SelectItem value="friend3">Sanjit</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button>Split Bill</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="pending">
                  <TabsList>
                    <TabsTrigger value="pending">Pending</TabsTrigger>
                    <TabsTrigger value="settled">Settled</TabsTrigger>
                  </TabsList>
                  <TabsContent value="pending">
                    <div className="grid gap-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">Dinner at Acme Restaurant</p>
                          <p className="text-xs text-muted-foreground">You owe INR 250 to Aman</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Mark as Settled
                          </Button>
                          <Link
                            href="upi://pay?pa=nishchay.space@okicici&pn=Nishchay&am=1&cu=INR"
                            target="_blank"
                          >
                            <Button variant="outline" size="sm">
                            Pay with UPI
                            </Button>
                          </Link>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">Movie Tickets</p>
                          <p className="text-xs text-muted-foreground">Pranav owes you INR 150</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Mark as Settled
                          </Button>
                          <Link
                            href="upi://pay?pa=nishchay.space@okicici&pn=Nishchay&am=1&cu=INR"
                            target="_blank"
                          >
                            <Button variant="outline" size="sm">
                              Pay with UPI
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="settled">
                    <div className="grid gap-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">Grocery Shopping</p>
                          <p className="text-xs text-muted-foreground">You paid INR 450 to Tojo</p>
                        </div>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">Rent Split</p>
                          <p className="text-xs text-muted-foreground">Nischay paid you INR 3000</p>
                        </div>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">You're over budget in the Dining category</p>
                      <p className="text-xs text-muted-foreground">
                        You've spent INR 1300 this month, which is INR 250 over your budget.
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Adjust Budget
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">You've saved more in the Groceries category</p>
                      <p className="text-xs text-muted-foreground">
                        You've spent INR 1150 this month, which is INR 225 less than your budget.
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      View Savings
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <footer className="border-t bg-background px-4 py-3 shadow-sm sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <p className="text-sm text-muted-foreground">&copy; 2024 Chip In. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function WalletIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}
